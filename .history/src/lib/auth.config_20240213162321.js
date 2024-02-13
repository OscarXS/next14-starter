export const authConfig = {
    pages: {
        signIn: '/login'
    },
    pro
    callbacks: {
        authorized({ auth, request }){
            return false
        }
    }
}