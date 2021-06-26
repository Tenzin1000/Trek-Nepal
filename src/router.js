import main  from './components/home.vue'
import about from './components/about.vue'
import destination from './components/main/destination'
import contact from './components/main/contact'

export default[
    {path:'trek-nepal/',component:main},
    {path:'trek-nepal/about',component:about},
    {path:'trek-nepal/destination',component:destination},
    {path:'trek-nepal/contact',component:contact}
]