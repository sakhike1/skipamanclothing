import Vue from 'vue';
import Vuex from 'vuex';
import blackt from '../assets/blackt.png';
import pacshirt from '../assets/pacshirt.png';
import purple from '../assets/purple.png';

import gray from '../assets/gray.png';
import blues from '../assets/blues.png';
import grays from '../assets/grays.png';

import white from '../assets/white.png';
import grace from '../assets/grace.png'
import red from '../assets/red.png'

Vue.use(Vuex);

export const store = new Vuex.Store({
        state: {

        count: 0,
        selectedColor: null,
        availableColors: ['black', 'red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        selectedSize: null,
        isOpen: false,
    
        topRated: [
            { id: 1, name: 'skipaman', price: 199, url: blackt, desc: "our T-shirt are designed to last", rate: 4.1,   color: "black" },
            { id: 2, name: 'skipaman', price: 199, url: pacshirt, desc: 'Handcrafted by skipaman', rate: 4.1, color: "black" },
            { id: 3, name: 'skipaman', price: 199, url: purple, desc: "Rock this coolest T-shirt", rate: 4.2, color: "purple" }
        ],

        allCategories: [
            { id: 4, name: 'skipaman', price: 199, url: gray, desc: "our T-shirt are designed to last", rate: 4.5, color: "gray"},
            { id: 5, name: 'skipaman', price: 199, url: blues, desc: 'Handcrafted by skipaman', rate: 4.0, color: "gray" },
            { id: 6, name: 'skipaman', price: 199, url: grays, desc: "Rock this coolest T-shirt", rate: 4.2 , color: "gray" }
        ],

        dishesNearYou: [
            { id: 7, name: 'skipaman', price: 199, url: white, desc: "Handcrafted by skipaman", rate: 4.2, color: "white" },
            { id: 9, name: 'skipaman', price: 199, url: red, desc: "our T-shirt are designed to last", rate: 4.4,  color: "gray" },
            { id: 9, name: 'skipaman', price: 199, url: grace, desc: "our T-shirt are designed to last", rate: 4.4,  color: "gray" }
        ],


        cartItemCount: 0,
        cartItems: [],
        totalPrice: 0,
       

        imageSources: [
            require('@/assets/skipa1.png'),
            require('@/assets/skipa2.png'),
            require('@/assets/skipa3.png'),
            require('@/assets/skipa4.png'),
            // Add more image sources as needed
        ],

        searchTerm: '',
        images: [
            { id: 1, url: 'image1.jpg' },
            { id: 2, url: 'image2.jpg' },
            { id: 3, url: 'image3.jpg' }
        ],
        aboutImage: [
            require('@/assets/AboutImage1.png'),
            require('@/assets/AboutImage2.png'),
            require('@/assets/AboutImage3.png'),
        ],

        items: [
            { name: 'blackTshirt', price: 199, title: 'black t-tshirt',  src: require('@/assets/blackTshirt.png') },
            { name: 'Graytshirt', price: 199, title: 'gray tshirt',  src: require('@/assets/Graytshirt.png') },
            { name: 'longsleeve', price: 199, title: 'long sleeve', src: require('@/assets/longsleeve.png') },
            
            
          ],
    },

    mutations: {
        increment(state) {
            state.count++
        },
        
        addToCart(state, payload) {
            let item = payload;
            item = { ...item, quantity: 1 };
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id == item.id);
                if (bool == true) {
                    let itemIndex = state.cartItems.findIndex(el => el.id == item.id);
                    state.cartItems[itemIndex]["quantity"] += 1;
                } else {
                    state.cartItems.push(item);
                }
            } else {
                state.cartItems.push(item);
            }
            state.cartItemCount++
        },
        removeItem(state, payload) {
            if (state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.id == payload.id);
                if (bool) {
                    let index = state.cartItems.findIndex(el => el.id == payload.id);
                    state.cartItems[index]["quantity"] === 0
                        ? (state.cartItems[index]["quantity"] = 0)
                        : (state.cartItems[index]["quantity"] -= 1);
                    if (state.cartItems[index]["quantity"] === 0)
                        state.cartItems.splice(index, 1)
                    if (state.cartItemCount !== 0)
                        state.cartItemCount--
                }
            }
        },
        updateSearchTerm(state, term) {
            state.searchTerm = term;
          },
          setSelectedColor(state, color) {
            state.selectedColor = color;
          },
          setSelectedSize(state, size) {
            state.selectedSize = size;
            state.isOpen = false;
          },
          toggleDropdown(state) {
            state.isOpen = !state.isOpen;
          },
          setSize(state, size) {
            state.selectedSize = size
          }
    },
    
    actions: {
        addToCart: (context, item) => {
            context.commit('addToCart', item)
        },
        removeItem: (context, payload) => {
            context.commit('removeItem', payload)
        },
        increment: (context) => {
            setTimeout(() => {
                context.commit('increment')
            }, 5000)
        },
        toggleDropdown({ commit }, size) {
            commit('toggleDropdown', size );
          },
          selectSize({ commit }, size) {
            commit('setSelectedSize', size);
          },
          selectColor({ commit }, color) {
            commit('setSelectedColor', color);
          },
         
    },
    getters: {
        
        filteredImages: (state) => {
            return state.images.filter(image => image.url.includes(state.searchTerm));
          }
    }
    
});

