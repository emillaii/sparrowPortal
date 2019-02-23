<template>
  <div class="dashboard-editor-container">
    <panelGroup/>
    <el-row :gutter="10">
      <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <TodoList @showDialog="showDialog"/>
      </el-col>
      <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <TodoList @showDialog="showDialog"/>
      </el-col>
      <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <TodoList @showDialog="showDialog"/>
      </el-col>
    </el-row>
    <CalibrationDialog ref="calibrationDialog"/>
  </div>
</template>

<script>
import icons from './requireIcons'
import TodoList from './components/TodoList'
import CalibrationDialog from './components/CalibationDialog'
import PanelGroup from './components/PanelGroup'

export default {
  name: 'SparrowDashboard',
  components: {
    TodoList,
    icons,
    CalibrationDialog,
    PanelGroup
  },
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    showDialog(todo) {
      this.$refs.calibrationDialog.show(todo)
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.dashboard-editor-container {
  background-color: #e3e3e3;
  min-height: 100vh;
  padding: 50px 60px 0px;
  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }
  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;
    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
