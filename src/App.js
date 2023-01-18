import './App.css';
import Card from "./components/card";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'; 
library.add( faCheck, faTimes);

const products = [
  {
    title : 'FREE',
    price : '0',
    checked : ['Single User', '5GB Storage', 'Unlimited Public Projects', 'Community Access'],
    crossed : ['Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports']
  },
  {
    title : 'PLUS',
    price : '9',
    checked : ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access','Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain'],
    crossed : ['Monthly Status Reports']
  },
  {
    title : 'PRO',
    price : '49',
    checked : ['Unlimited Users', '150GB Storage', 'Unlimited Public Projects', 'Community Access','Unlimited Private Projects', 'Dedicated Phone Support', 'Unlimited Free Subdomains', 'Monthly Status Reports']
  }
]

function App() {
  return (
    <section className='pricing py-5'>
      <div className='container'>
        <div className='row'>
          {
            products.map((item, index) => {
              return <Card key={index} title = {item.title} price = {item.price} checked = {item.checked} crossed = {item.crossed} />
            })
          }
        </div>
      </div>
    </section>
  )
}


export default App;
