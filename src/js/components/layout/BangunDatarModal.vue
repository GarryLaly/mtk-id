<template>

	<div class="BangunDatar-modal modal" v-show="showModal" transition="modal">
    <div class="modal-bg" v-on:click="closeModal()"></div>
    <div class="modal-wrapper">
      <div class="modal-wrapper-container">

        <div class="modal-wrapper-container-header text-center">
          <h4>{{ itemOpen }}</h4>
        </div>
        
        <div class="modal-wrapper-container-body">
          <slot name="body">
				  	<form v-show="currentItem('persegi')">
              <strong>Cari: </strong>
              <ul class="nav nav-tabs" v-on:click.prevent>
                <li v-for="tab in persegi.search" v-bind:class="{ 'active': tab == persegi.tabActive }" v-on:click="makeTabActive(itemOpen, tab)">
                  <a href="#">{{ tab | capitalize }}</a>
                </li>
              </ul>
              <br>
              <div v-if="currentTabContent(persegi.tabActive, 'keliling')">
                <div class="well">
                  <strong>Rumus:</strong>
                  <br>
                  Keliling = s * 4
                </div>
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1">s</span>
                  <input number type="number" class="form-control" v-model="persegi.sisi" placeholder="Sisi">
                </div>
                <div class="clearfix"></div>
                <br>
                <div class="well">
                  <strong>Menghitung:</strong>
                  <br>
                  Keliling = {{ persegi.sisi }} * 4
                </div>
                <button type="submit" class="btn btn-primary" v-on:click="calculateItem(itemOpen, persegi.tabActive)">Hitung</button>
              </div>
              <div v-if="currentTabContent(persegi.tabActive, 'luas')">
                <div class="well">
                  <strong>Rumus:</strong>
                  <br>
                  Luas = s * s
                </div>
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1">s</span>
                  <input number type="number" class="form-control" v-model="persegi.sisi" placeholder="Sisi">
                </div>
                <div class="clearfix"></div>
                <br>
                <div class="well">
                  <strong>Menghitung:</strong>
                  <br>
                  Luas = {{ persegi.sisi }} * {{ persegi.sisi }}
                </div>
                <button type="submit" class="btn btn-primary" v-on:click="calculateItem(itemOpen, persegi.tabActive)">Hitung</button>
              </div>
              <div v-if="currentTabContent(persegi.tabActive, 'sisi')">
                <div class="well">
                  <strong>Rumus:</strong>
                  <br>
                  Sisi = k / 4
                  <br>
                  {{{ sisi_luas }}}
                </div>
                <div class="input-group">
                  <span class="input-group-addon" id="basic-addon1">s</span>
                  <input number type="number" class="form-control" v-model="persegi.sisi" placeholder="Sisi">
                </div>
                <div class="clearfix"></div>
                <br>
                <div class="well">
                  <strong>Menghitung:</strong>
                  <br>
                  Luas = {{ persegi.sisi }} * {{ persegi.sisi }}
                </div>
                <button type="submit" class="btn btn-primary" v-on:click="calculateItem(itemOpen, persegi.tabActive)">Hitung</button>
              </div>
				  	</form>
            <form v-show="currentItem('segitiga')">
              <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">a</span>
                <input type="text" class="form-control" placeholder="Alas">
              </div>
              <br>
              <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">t</span>
                <input type="text" class="form-control" placeholder="Tinggi">
              </div>
              <br>
              <button type="submit" class="btn btn-primary">Hitung</button>
            </form>
          </slot>
        </div>

        <div class="modal-wrapper-container-footer">
          <slot name="footer">
            <strong>Hasil: </strong>
            <span>{{ result }}</span>
            <button class="modal-button-default btn btn-danger" v-on:click="closeModal()">
              Tutup
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { 
    getBangunDatarModal,
    getBangunDatarItemOpen,
    getBangunDatarResult
  } from '../../vuex/getters.js';
  import { 
    BangunDatar_openModal, 
    BangunDatar_closeModal,
    BangunDatar_calculateResult
  } from '../../vuex/actions.js';

  export default {
    data() {
      return {
        persegi: {
          search: ['keliling', 'luas', 'sisi'],
          tabActive: 'keliling',
          sisi: 0
        },
        sisi_luas: "\\begin{eqnarray*} \\mbox{ Sisi = } \\sqrt{12} \\end{eqnarray*}",
      }
    },
    vuex: {
      getters: {
        showModal: getBangunDatarModal,
        itemOpen: getBangunDatarItemOpen,
        result: getBangunDatarResult
      },
      actions: {
        openModal: BangunDatar_openModal,
        closeModal: BangunDatar_closeModal,
        calculateResult: BangunDatar_calculateResult
      }
    },
    methods: {
      currentItem: function (item) {
        return this.itemOpen.toLowerCase() === item;
      },
      currentTabContent: function(content, search) {
        return content === search;
      },
      makeTabActive: function(item, tab) {
        this.calculateResult(0);

        switch(item.toLowerCase()) {
          case "persegi":
            this.persegi.tabActive = tab;
            this.persegi.sisi = 0;

            break;
          case "segitiga":
            break;
        }

        this.$nextTick(function() {
          MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        });
      },
      calculateItem: function (item, search) {
        console.log(item);
        switch(item.toLowerCase()) {
          case "persegi":
            if (search == 'keliling') {
              this.calculateResult(this.persegi.sisi * 4);
            }
            if (search == 'luas') {
              this.calculateResult(this.persegi.sisi * this.persegi.sisi);
            }

            break;
          case "segitiga":
            break;
        }
      }
    }
  };

</script>
