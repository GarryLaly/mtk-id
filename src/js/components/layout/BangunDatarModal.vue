<template>

	<div class="BangunDatar-modal modal" v-show="showModal" transition="modal">
    <div class="modal-bg" v-on:click="closeModal()"></div>
    <div class="modal-wrapper">
      <div class="modal-wrapper-container">

        <div class="modal-wrapper-container-header">
          <slot name="header">Persegi</slot>
        </div>
        
        <div class="modal-wrapper-container-body">
          <slot name="body">
				  	<form>
				  			<div class="input-group">
				  			  <input type="text" class="form-control" placeholder="Sisi">
				  			</div>
				  	</form>
          </slot>
        </div>

        <div class="modal-wrapper-container-footer">
          <slot name="footer">
            default footer
            <button class="modal-button-default" v-on:click="closeModal()">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { getBangunDatarModal } from '../../vuex/getters.js';
  import { 
    BangunDatar_openModal, 
    BangunDatar_closeModal 
  } from '../../vuex/actions.js';

  export default {
    vuex: {
      getters: {
        showModal: getBangunDatarModal
      },
      actions: {
        openModal: BangunDatar_openModal,
        closeModal: BangunDatar_closeModal
      }
    }
  };

</script>
