<template>
    <div  class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"  :aria-hidden= 'openmodal'>
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          ...
        </div>
      </div>
  </div>

</template>
<script>
export default {
  props:['openmodal'],
  data () {
    return {
      dialog: false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
