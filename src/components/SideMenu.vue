<template>
    <div>
        <button @click="handleMenuToggle" v-bind:class="{ sidemenu__btn_opened: opened }" class="sidemenu__btn">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div v-bind:class="{ sidemenu_closed: !opened }" class="sidemenu ">
            <ul class="sidemenu__list">
                <li v-for="category in categories" :key="category.categoryName" class='sidemenu__item' >
                    <router-link 
                        :to="{
                            name: 'Tasks',
                            params: {slug: category.categoryName}
                        }"
                        class="sidemenu__link"
                    >
                        {{ category.categoryName }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
//add categories


export default {
    data() {
        return {
            categories: this.$store.state.categories,
            opened: true
        }
    },
    methods: {
        handleMenuToggle() {
            this.opened = !this.opened;
        }
    }
}
</script>

<style>
.sidemenu {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 16%;
    min-width: 200px;
    padding: 0 20px;
    padding-top: 14vh;
    border-right: 4px solid #ececec;
    background-color: #F9F9F9;
    overflow-y: auto;

    transition: 0.25s;
}

.sidemenu__item {
    list-style: none;
    cursor: pointer;
    
}

.sidemenu__link {
    color: var(--font-color);
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 7px;

    display: flex;
    appearance: none;
    background: transparent;
    border:none;
    height: 32px;
    align-items: center;
    padding-left: 5px;
    cursor: pointer;
}

.sidemenu__link_active, .sidemenu__link:hover {
    background-color: var(--background-select-color);
}




/* menu btn */

.sidemenu__btn {
    z-index: 10;

    position: fixed;
    top: 10px;
    left: 10px;

    display: none;
    flex-direction: column;
    align-items:flex-end;
    justify-content: center;
    appearance: none;
    border:none;

    background-color: #93B1C6;
    height: 40px;
    width: 35px;
    border-radius: 5px;
    cursor: pointer;
}

.sidemenu__btn > span {
    display: block;
    height: 2px;
    width: 24px;
    background: #fff;
    margin: 0px 5px;
    border-radius: 2px;

    transition: 0.15s cubic-bezier(.86,.4,1,.43);
}

.sidemenu__btn > span:nth-child(2n) {
    margin: 5px 5px;
}

.sidemenu__btn > span:last-child {
    width: 15px;
}

.sidemenu__btn_opened > span:first-child {
    transform: translate(0px, 7px) rotate(-45deg); 
}

.sidemenu__btn_opened > span:nth-child(2n) {
    transform:  rotate(45deg); 
}

.sidemenu__btn_opened > span:last-child {
    transform: translate(0, -7px) rotate(-45deg);
    width: 24px;
}

@media screen and (max-width: 767px) {
    .sidemenu {
        position: absolute;
        z-index: 3;
    }

    .sidemenu__btn {
        display: flex;
    }

    .sidemenu_closed {
        transform: translateX(-100%); 
    }
}
</style>