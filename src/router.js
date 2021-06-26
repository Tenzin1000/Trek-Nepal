import main  from './components/home.vue'
import about from './components/about.vue'
import destination from './components/main/destination'
import contact from './components/main/contact'

export default[
    {path:'/',component:main},
    {path:'/about',component:about},
    {path:'/destination',component:destination},
    {path:'/contact',component:contact}
]