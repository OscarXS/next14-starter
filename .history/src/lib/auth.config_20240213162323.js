export const authConfig = {
    pages: {
        signIn: '/login'
    },
    prov
    callbacks: {
        authorized({ auth, request }){
            return false
        }
    }
}