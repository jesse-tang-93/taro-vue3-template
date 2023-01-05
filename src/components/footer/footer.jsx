import {reactive} from 'vue'
import "./footer.scss"
export default {
  name:'ComFooter',
  setup(){
    return ()=>{
      return <div>
        <nut-tabbar
         bottom={true}
         unactive-color={'#333'}
         active-color={'#f00'}
        >
          <nut-tabbar-item
           tab-title=""
           img=""
           activeImg=""
          >
          </nut-tabbar-item>

        </nut-tabbar>
      </div>
    }
  }
}
