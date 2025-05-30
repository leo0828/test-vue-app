<template>
  <div class="flex flex-col gap-12">
    <el-config-provider :message="config">
      <section class="space-y-4">
        <div>
          <el-button
            v-for="btn in items"
            :key="btn.type"
            :type="btn.type"
            @click="showMessage(btn.messageConfig)"
          >
            {{ btn.label }}
          </el-button>
        </div>
        <div>
          <el-button
            v-for="btn in items"
            :key="btn.type"
            :type="btn.type"
            plain
            @click="showPlainMessage(btn.messageConfig)"
          >
            {{ btn.label }}
          </el-button>
        </div>
        <div>
          <el-button v-for="btn in items" :key="btn.type" :type="btn.type" round>
            {{ btn.label }}
          </el-button>
        </div>
        <div>
          <el-button v-for="btn in items" :key="btn.type" :type="btn.type" text>
            {{ btn.label }}
          </el-button>
        </div>
      </section>

      <section>
        <div class="flex gap-2">
          <el-link v-for="link in items" :key="link.type" :type="link.type">
            {{ link.label }}
          </el-link>
        </div>
      </section>

      <section class="space-y-4">
        <div class="flex gap-2">
          <span>Dark</span>
          <el-tag v-for="tag in tags" :key="tag.label" :type="tag.type" effect="dark">
            {{ tag.label }}
          </el-tag>
        </div>
        <div class="flex gap-2">
          <span>Light</span>
          <el-tag v-for="tag in tags" :key="tag.label" :type="tag.type" effect="light">
            {{ tag.label }}
          </el-tag>
        </div>
        <div class="flex gap-2">
          <span>Plain</span>
          <el-tag v-for="tag in tags" :key="tag.label" :type="tag.type" effect="plain">
            {{ tag.label }}
          </el-tag>
        </div>
      </section>

      <section>
        <el-form ref="formRef" :model="form" label-position="top" class="max-w-xl">
          <el-form-item label="Activity name" prop="name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Activity zone" prop="region">
            <el-select v-model="form.region" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="Pick a date"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker
                  v-model="form.date2"
                  placeholder="Pick a time"
                  style="width: 100%"
                />
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="Instant delivery" prop="delivery">
            <el-switch v-model="form.delivery" />
          </el-form-item>
          <el-form-item label="Activity type" prop="type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox value="Online activities" name="type"> Online activities </el-checkbox>
              <el-checkbox value="Promotion activities" name="type">
                Promotion activities
              </el-checkbox>
              <el-checkbox value="Offline activities" name="type"> Offline activities </el-checkbox>
              <el-checkbox value="Simple brand exposure" name="type">
                Simple brand exposure
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Resources" prop="resource">
            <el-radio-group v-model="form.resource">
              <el-radio value="Sponsor">Sponsor</el-radio>
              <el-radio value="Venue">Venue</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Activity form" prop="desc">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit">Submit</el-button>
            <el-button plain @click="handleReset(formRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </section>
    </el-config-provider>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import { ElMessage } from "element-plus"

const config = reactive({
  showClose: true,
})

const items = [
  {
    type: "default",
    label: "Default",
    messageConfig: {
      type: "primary",
      message: "This is a message",
    },
  },
  {
    type: "primary",
    label: "Primary",
    messageConfig: {
      type: "primary",
      message: "This is a message",
    },
  },
  {
    type: "success",
    label: "Success",
    messageConfig: {
      type: "success",
      message: "This is a message",
    },
  },
  {
    type: "info",
    label: "Info",
    messageConfig: {
      type: "info",
      message: "This is a message",
    },
  },
  {
    type: "warning",
    label: "Warning",
    messageConfig: {
      type: "warning",
      message: "This is a message",
    },
  },
  {
    type: "danger",
    label: "Danger",
    messageConfig: {
      type: "error",
      message: "This is a message",
    },
  },
]

const tags = [
  {
    label: "Primary",
    type: "primary",
  },
  {
    label: "Success",
    type: "success",
  },
  {
    label: "Info",
    type: "info",
  },
  {
    label: "Warning",
    type: "warning",
  },
  {
    label: "Danger",
    type: "danger",
  },
]

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
})

const formRef = ref(null)

const handleSubmit = () => {
  showMessage({
    message: "Submit success",
    type: "success",
  })
}

const handleReset = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const showMessage = (config) => {
  ElMessage(config)
}

const showPlainMessage = (config) => {
  ElMessage({ ...config, plain: true })
}
</script>
