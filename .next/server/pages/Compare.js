(()=>{var e={};e.id=737,e.ids=[737,660],e.modules={9122:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,a){return a in t?t[a]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,a)):"function"==typeof t&&"default"===a?t:void 0}}})},1146:(e,t,a)=>{"use strict";a.r(t),a.d(t,{config:()=>j,default:()=>h,getServerSideProps:()=>P,getStaticPaths:()=>b,getStaticProps:()=>f,reportWebVitals:()=>y,routeModule:()=>N,unstable_getServerProps:()=>x,unstable_getServerSideProps:()=>O,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>v,unstable_getStaticProps:()=>S});var r={};a.r(r),a.d(r,{default:()=>g});var n=a(4395),o=a(7414),i=a(9122),c=a(5449),s=a.n(c),p=a(7470),l=a.n(p),m=a(997),u=a(6689);let d=JSON.parse('[{"apartmentName":"Cozy Studio Apartment","roomOccupancy":1,"location":"Downtown","price":"$1000/month","image":"http://www.gwinnettforum.com/wp-content/uploads/2015/03/15.0320.Viewsinside.jpg"},{"apartmentName":"Spacious Loft","roomOccupancy":2,"location":"City Center","price":"$1500/month","image":"https://static.aspensquare.com/properties/california/davis/cambridge-house/gallery-photos/kitchen-dining-1.jpg"},{"apartmentName":"Modern 1-Bedroom Apartment","roomOccupancy":2,"location":"Suburb","price":"$1200/month","image":"https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,c_fill,g_center,h_667,w_1000/v1590176067/g5/g5-c-5lzenrews-olympus-property-management/g5-cl-1k91bxtt16-the-davis/uploads/The_Davis_076_p7y8wl.jpg"},{"apartmentName":"Luxury Penthouse Suite","roomOccupancy":4,"location":"Waterfront","price":"$3000/month","image":"https://s3-media1.fl.yelpcdn.com/bphoto/DbQGE1Jj635l_8FEnSX4eg/o.jpg"},{"apartmentName":"Charming Garden Apartment","roomOccupancy":2,"location":"Village","price":"$1100/month","image":"https://cdn.carmel-apartments.com/system/uploads/fae/image/asset/6302/uc-davis-student-apartments_living-room_3.jpg"},{"apartmentName":"Vintage Studio","roomOccupancy":1,"location":"Old Town","price":"$900/month","image":"https://images1.apartments.com/i2/dLtt-6iLQbikyK-IGPpMhwddDxrPrhToFKBzqe2WOD4/117/the-davis-greenville-nc-building-photo.jpg"},{"apartmentName":"Family-Friendly Townhouse","roomOccupancy":3,"location":"Suburb","price":"$1800/month","image":"https://images1.apartments.com/i2/IuqxXfNX0_YqKOPWPFqASCnKdvGorobO60ENrIg7XPE/111/the-u-davis-ca-kitchen-living-area.jpg?p=1"},{"apartmentName":"Executive Condo","roomOccupancy":2,"location":"Financial District","price":"$2000/month","image":"https://i.pinimg.com/originals/77/23/8d/77238d5773b9e4603fdb26c036f8ce53.jpg"},{"apartmentName":"Sunny 2-Bedroom Apartment","roomOccupancy":4,"location":"Beachfront","price":"$2500/month","image":"https://i.pinimg.com/originals/fb/e8/a2/fbe8a2f38f4e2bf4ebc042f1d8ebacf3.jpg"},{"apartmentName":"Artist\'s Loft","roomOccupancy":1,"location":"Arts District","price":"$1100/month","image":"https://patch.com/img/cdn/users/22817924/2014/08/raw/53ff3d88aa410.jpg"},{"apartmentName":"Coastal Retreat","roomOccupancy":2,"location":"Coastal Town","price":"$1700/month","image":"https://wallpaperaccess.com/full/3569762.jpg"},{"apartmentName":"Urban Chic Studio","roomOccupancy":1,"location":"City Center","price":"$950/month","image":"https://mir-s3-cdn-cf.behance.net/project_modules/fs/dc0af062817637.5a9d111588437.jpg"},{"apartmentName":"Riverside Duplex","roomOccupancy":3,"location":"Riverside","price":"$2200/month","image":"https://images.pexels.com/photos/6527037/pexels-photo-6527037.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"},{"apartmentName":"Pet-Friendly Apartment","roomOccupancy":2,"location":"Parkside","price":"$1300/month","image":"https://calbizjournal.com/wp-content/uploads/2021/02/studio-apartment.jpg"},{"apartmentName":"Elegant Townhome","roomOccupancy":4,"location":"Suburban Estates","price":"$2800/month","image":"https://2ab10c2753804d516e29-08a79697c8b21faaaa1ccba9d3e2401f.ssl.cf6.rackcdn.com/PUIC_Classic_studio_3.jpg"}]');function g(){let[e,t]=(0,u.useState)([]),[a,r]=(0,u.useState)(""),[n,o]=(0,u.useState)([]),[i,c]=(0,u.useState)(null),s=a=>{e.length<2&&!e.includes(a)&&t([...e,a])},p=a=>{t(e.filter(e=>e!==a))};return(0,m.jsxs)("div",{className:"container",children:[m.jsx("div",{className:"search-bar",children:m.jsx("input",{type:"text",placeholder:"Search...",value:a,onChange:e=>{r(e.target.value),o(d.filter(t=>t.apartmentName.toLowerCase().includes(e.target.value.toLowerCase())))}})}),""!==a&&m.jsx("div",{className:"apartment-list",children:m.jsx("ul",{children:n.map((e,t)=>(0,m.jsxs)("li",{onMouseEnter:()=>c(t),onMouseLeave:()=>c(null),children:[e.apartmentName,i===t&&m.jsx("button",{onClick:()=>s(e),children:"Add"})]},t))})}),(0,m.jsxs)("div",{className:"selected-apartments",children:[m.jsx("h2",{className:"selected-title",children:"Selected Apartments:"}),e.map((e,t)=>(0,m.jsxs)("div",{className:"selected-apartment",children:[m.jsx("h2",{children:e.apartmentName}),m.jsx("img",{src:e.image}),(0,m.jsxs)("p",{children:["Room Occupancy: ",e.roomOccupancy]}),(0,m.jsxs)("p",{children:["Location: ",e.location]}),(0,m.jsxs)("p",{children:["Price: ",e.price]}),m.jsx("button",{onClick:()=>p(e),children:"Remove"})]},t))]})]})}a(5871);let h=(0,i.l)(r,"default"),f=(0,i.l)(r,"getStaticProps"),b=(0,i.l)(r,"getStaticPaths"),P=(0,i.l)(r,"getServerSideProps"),j=(0,i.l)(r,"config"),y=(0,i.l)(r,"reportWebVitals"),S=(0,i.l)(r,"unstable_getStaticProps"),v=(0,i.l)(r,"unstable_getStaticPaths"),_=(0,i.l)(r,"unstable_getStaticParams"),x=(0,i.l)(r,"unstable_getServerProps"),O=(0,i.l)(r,"unstable_getServerSideProps"),N=new n.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/Compare",pathname:"/Compare",bundlePath:"",filename:""},components:{App:l(),Document:s()},userland:r})},7470:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=a(5233),n=a(997),o=r._(a(6689)),i=a(3557);async function c(e){let{Component:t,ctx:a}=e;return{pageProps:await (0,i.loadGetInitialProps)(t,a)}}class s extends o.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,n.jsx)(e,{...t})}}s.origGetInitialProps=c,s.getInitialProps=c,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5871:()=>{},7414:(e,t)=>{"use strict";var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},1017:e=>{"use strict";e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[449],()=>a(1146));module.exports=r})();