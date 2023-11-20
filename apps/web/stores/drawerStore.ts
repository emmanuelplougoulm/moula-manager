export const useDrawerStore = defineStore('drawer', {
    state: () => ({
        tabs: [
            {
                name: 'overview',
                active: true
            },
            {
                name: 'portfolio1',
                active: false
            },
            {
                name: 'portfolio2',
                active: false
            }
        ],

    })
})