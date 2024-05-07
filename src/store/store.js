import Vue from 'vue';
import Vuex from 'vuex';
import blackt  from '@/assets/skipaimage10.png';
import whiteT  from '@/assets/New60.png';
import melody from '@/assets/new64.png'
import retired from '@/assets/new72.png'
import whiteTshirt from '@/assets/skipaimage14.png'




Vue.use(Vuex);

export const store = new Vuex.Store({
        state: {

        count: 0,
        selectedColor: null,
        availableColors: ['black', 'red', 'blue', 'yellow', 'green', 'purple', 'orange'],
        selectedSize: null,
        isOpen: false,
    
        topRated: [
            { id: 1, name: 'skipaman', price: 199, url: blackt, thumbnailImages: [
                { url: require('@/assets/skipaimage11.png') },
                { url: require('@/assets/skipaimage12.png') },
                { url: require('@/assets/skipaimage13.png') },
                
                // Add more small images as needed for item 1
              ], desc: "our T-shirt are designed to last", rate: 4.1,   color: "black" },
            { id: 2, name: 'skipaman', price: 199, url: whiteT, thumbnailImages: [
              { url: require('@/assets/new61.png') },
              { url: require('@/assets/new62.png') },
              { url: require('@/assets/new63.png') },
                
                // Add more small images as needed for item 1
              ], desc: 'Handcrafted by skipaman', rate: 4.1, color: "black" },
            { id: 3, name: 'skipaman', price: 199, url: melody , thumbnailImages: [
              { url: require('@/assets/new65.png') },
              { url: require('@/assets/new66.png') },
              { url: require('@/assets/new67.png') },
                
                // Add more small images as needed for item 1
              ], desc: "Rock this coolest T-shirt", rate: 4.2, color: "purple" }
        ],

        allCategories: [
          { id: 1, name: 'skipaman', price: 199, url: retired, thumbnailImages: [
            { url: require('@/assets/new73.png') },
            { url: require('@/assets/new74.png') },
            { url: require('@/assets/new75.png') },
            
            // Add more small images as needed for item 1
          ], desc: "our T-shirt are designed to last", rate: 4.1,   color: "black" },
        { id: 2, name: 'skipaman', price: 199, url: whiteTshirt, thumbnailImages: [
          { url: require('@/assets/skipaimage15.png') },
          { url: require('@/assets/skipaimage16.png') },
          { url: require('@/assets/skipaimage17.png') },
            
            // Add more small images as needed for item 1
          ], desc: 'Handcrafted by skipaman', rate: 4.1, color: "black" },
        { id: 3, name: 'skipaman', price: 199, url: blackt, thumbnailImages: [
          { url: require('@/assets/new12.png') },
                { url: require('@/assets/new15.png') },
                { url: require('@/assets/new18.png') },
            
            // Add more small images as needed for item 1
          ], desc: "Rock this coolest T-shirt", rate: 4.2, color: "purple" }
        ],

        besttshirt: [
          { id: 1, name: 'skipaman', price: 199, url: blackt, thumbnailImages: [
            { url: require('@/assets/new30.png') },
            { url: require('@/assets/new31.png') },
            { url: require('@/assets/new33.png') },
            
            // Add more small images as needed for item 1
          ], desc: "our T-shirt are designed to last", rate: 4.1,   color: "black" },
        { id: 2, name: 'skipaman', price: 199, url: blackt, thumbnailImages: [
          { url: require('@/assets/new12.png') },
          { url: require('@/assets/new15.png') },
          { url: require('@/assets/new18.png') },
            
            // Add more small images as needed for item 1
          ], desc: 'Handcrafted by skipaman', rate: 4.1, color: "black" },
        { id: 3, name: 'skipaman', price: 199, url: blackt, thumbnailImages: [
          { url: require('@/assets/new12.png') },
          { url: require('@/assets/new15.png') },
          { url: require('@/assets/new18.png') },
            
            // Add more small images as needed for item 1
          ], desc: "Rock this coolest T-shirt", rate: 4.2, color: "purple" }
        ],


        cartItemCount: 0,
        cartItems: [],
        totalPrice: 0,
       

        imageSources: [
            require('@/assets/skipaimage1.png'),
            require('@/assets/skipaimage2.png'),
            require('@/assets/skipaimage3.png'),
            require('@/assets/skipaimage4.png'),
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
            { name: 'blackt shirt', price: 199, title: 'black t-tshirt',  src: require('@/assets/blackt.png') },
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

