import Vue from 'vue';
import Vuex from 'vuex';
import cake from '../assets/cake.png';
import noodles from '../assets/noodles.png';
import fries from '../assets/fries.png';

import macroni from '../assets/macroni.png';
import pizza from '../assets/pizza.png';
import salad from '../assets/salad.png';

import samosa from '../assets/samosa.png';
import soup from '../assets/soup.png';
import tacos from '../assets/tacos.png'

Vue.use(Vuex);

export const store = new Vuex.Store({
        state: {

        count: 0,
        buttonColor: 'white',
        selectedSize: null, // Initialize with null
        isOpen: false,
    
        topRated: [
            { id: 1, name: 'skipaman', price: 199, url: cake, desc: "our T-shirt are designed to last", rate: 4.1 },
            { id: 2, name: 'skipaman', price: 199, url: noodles, desc: 'Handcrafted by skipaman', rate: 4.1 },
            { id: 3, name: 'skipaman', price: 199, url: fries, desc: "Rock this coolest T-shirt", rate: 4.2 }
        ],

        allCategories: [
            { id: 4, name: 'skipaman', price: 199, url: macroni, desc: "our T-shirt are designed to last", rate: 4.5 },
            { id: 5, name: 'skipaman', price: 199, url: pizza, desc: 'Handcrafted by skipaman', rate: 4.0 },
            { id: 6, name: 'skipaman', price: 199, url: salad, desc: "Rock this coolest T-shirt", rate: 4.2 }
        ],

        dishesNearYou: [
            { id: 7, name: 'skipaman', price: 199, url: samosa, desc: "Very tasty", rate: 4.2 },
            { id: 8, name: 'skipaman', price: 199, url: soup, desc: "Delicious", rate: 4.2 },
            { id: 9, name: 'skipaman', price: 199, url: tacos, desc: "Awesome!!", rate: 4.4 }
        ],


        cartItemCount: 0,
        cartItems: [],
        totalPrice: 0,
        todos: [
            { id: 1, name: "Shopping at 7", done: true },
            { id: 2, name: "Learn Vue", done: true },
            { id: 3, name: "Gaming", done: false }
        ],

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
          setButtonColor(state, color) {
            state.buttonColor = color;
          },
          setSelectedSize(state, size) {
            state.selectedSize = size;
            state.isOpen = false;
          },
          toggleDropdown(state) {
            state.isOpen = !state.isOpen;
          },
          
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
        toggleDropdown({ commit }) {
            commit('toggleDropdown');
          },
          selectSize({ commit }, size) {
            commit('selectSize', size);
          }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        filteredImages: (state) => {
            return state.images.filter(image => image.url.includes(state.searchTerm));
          }
    }
    
});

