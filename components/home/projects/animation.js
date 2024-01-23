export const slideUp = {
    initial: {
        y: "100%",
        opacity: 0
    },
    open: (i) => ({
        y: "0%",
        transition: {duration: 0.5, delay: 0.01 },
        opacity: 1
    }),
    closed: {
        y: "100%",
        transition: {duration: 0.5},
        opacity: 0
    }
}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 2.5}
    },
    closed: {
        opacity: 0,
        transition: {duration: 2.5}
    }
}