export const opacityVariant = {
    start:{opacity:0,},
    stop:{
        opacity: 1,
        transition:{
            duration:.3,
        }
    },

}

export const showSidebarVariant = {
    start: {
        opacity:0,
        x:-9
    },
    stop: {
        opacity:1,
        x:-1,
        transition: {
            type:"spring",
            damping:10,
            stiffness:100,
            delay:0.1,
            duration: 0.2
        }
    }
}

export const clickVariant = {
    click:{
        scale:0.9
    }
}

export const  showModalVariant = {
    start:{
        opacity:0
    },
    stop:{
        x:50,
        opacity:1,
        transition: {
            type:"spring",
            damping:10,
            stiffness:100,
            duration: 0.2
        }
    }
}

export const  searchModal= {
    start:{
        opacity:0
    },
    stop:{
        opacity:1,
        transition: {
            type:"spring",
            damping:10,
            stiffness:100,
            duration: 0.2,
            delay: 0.2
        }
    }
}