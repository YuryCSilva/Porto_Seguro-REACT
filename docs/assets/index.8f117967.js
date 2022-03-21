var X=Object.defineProperty,V=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var B=(n,t,a)=>t in n?X(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,m=(n,t)=>{for(var a in t||(t={}))N.call(t,a)&&B(n,a,t[a]);if(A)for(var a of A(t))R.call(t,a)&&B(n,a,t[a]);return n},h=(n,t)=>V(n,K(t));var w=(n,t)=>{var a={};for(var r in n)N.call(n,r)&&t.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&A)for(var r of A(n))t.indexOf(r)<0&&R.call(n,r)&&(a[r]=n[r]);return a};import{r as l,j as e,s as p,a as i,L as g,F as M,c as q,b as v,d as $,u as _,R as ee,o as ne,e as ie,B as te,f as ae,g as oe,W as re,h as G,i as se}from"./vendor.e05b9ad0.js";const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=a(o);fetch(o.href,s)}};le();const W=l.exports.createContext({});function pe({children:n}){const[t,a]=l.exports.useState(null),r=l.exports.useCallback(s=>{a(s)},[]),o=l.exports.useMemo(()=>({HandleChangeData:r,data:t}),[r,t]);return e(W.Provider,{value:o,children:n})}const k=()=>l.exports.useContext(W),j=l.exports.createContext({});function de({children:n}){const[t,a]=l.exports.useState(null),r=l.exports.useCallback(s=>{a(s)},[]),o=l.exports.useMemo(()=>({HandleChangeData:r,dataCard:t}),[r,t]);return e(j.Provider,{value:o,children:n})}const E=()=>l.exports.useContext(j);var D="data:image/png;base64,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",ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAArCAYAAAAkL+tRAAAABHNCSVQICAgIfAhkiAAADqxJREFUaEPdWgt0VdWZ/vfe55x77s19PwgkASGDPJWHlzyAYtNxBtFRC3YhaEhAHeuivhGnndW1lHG1085qcZbW5axl1QYSwBI7KrU4RVrpohKT8JCHyCPhmUDIfeU+cl/nnL3nP9EwlCKkgJI1Z92s3Jvsvc///c/v/88lMMivhWXe4RaJrRNC7DnRFV625Rhkr0RkciWbB7q3aiSoBQ6XtXdvPLkFQO/fd2cQbCq3F2Rpqve3OyB9/nn3lblKJaa8LAT/JJvSft74aSI60Ht+2bqvHPD8CWBXXd7biCCl+Rypf3NX+NR8AKYGPcUgsbsJkJkGwK/XNIfeOkdIcm9FwRCZWH9EuDjcHY28+H4b5K4UrLn/qwRMUeiARKx3EUKWoOBv80z4v+I5P3W5+AxK2UNAyG0C4Ajn+rKG5ugHpkCmMizl7hsYkx8SnDupNfLdui1X5sbnKuorAbwCgLZX+sai9e7Bn2oBJKpp2nLI5Q/LNustgpEZFMhYQmAWF2KNwUNPrWmGBHqDIjtcN0pEeQSV9E8Gzy1qaI73KeJqXVcdcB/YoK8MJLgDrTgbBR0PIF7WdG29xNgsIYhicP0PGJvfI0Tczg3jwfqW6O/vu9HlkWzyFEFgLCrjdtw3Lp3LzGzclQpdLbBX3aWXYHIyAr7bEchIdNcsEHoPWsqFSaeeCKCcQAo0YyNXwCUJeQNqe2evpj2gSMQhCTrLACELg++SZLYU91d2h4yq99uiCTPplVpAfuMgJK8U/NW0MFlU7qshwIdivH4AjE0nlK0AAb1o4RYhjN+LTP49OZfK6J4hr1ACCzQwFlABpwgnNwPhRzPZTFPj7szp2umBFzAUboln8rOcghWAlSxAhaV4JvtO/Z5U95WAvpqAYdFU92TKWZgSQ+ZWZQ0eXglCtCHYVzL5/Fp0z3BtuedeQuUXgQgmOPwbKqOEA9+UyvHWdz7p6THBIOCfYHxXCx1+RigZxXWthTCiCwFJ0/2vGeD5Qc8IdMdyI5/d9uau9CkUhOIPry33P0MY/RGCPYPu/FMDIg1mUlpY6R5pIfIqtN43EKhhcFhHNH3lpyT22Y4doJn7qyd5iySb9FOsH3OBi9/okPmPhJ465hCu8Uym19c3x968ZoAXVXj/kRL2OCaenzS0RptQELFgmv0Gq2TdjMnHggK/nk6GVzTux9jFElhTEfg+pXQ5Whfj2lidiWd/2Li/90wVlqKSaY6/o0ydgyFwg6DgZYTcIoB/uKopfLcJsKbSPg4MS0W2NVLfCICl+/Iu06VJEEAagtq1lwANOYE5DUw3OTcjqsEkK95eEsya50xIKuvVCE+dicY2nYFeM5mU+GyeSDwd7ScGNZX+1xhl1ZyLjVxLPdqwI326r75OthbbrPYGTEZlIPjq1o/DT+4HyKOXuGyU3geMPm4qDF97sYzZCKEz0UOMdDg9obEtFTLXWWWYITixE87bMkZPR2gXxLb8H3MzseD+i1/kttHgdHmsLsKlAgbURhm3cMosTFBFUKpQIRRBuEXnxIp/kwmIjKHTbQ07Q20XOrq20v8cCjuW57Mv1u9INPevqZlkH0KstkcxORkZkv9FY9PnNLGm3DWKUGU5gswBN94DzruJJA1HsN9C5YzIdIcebjwC8S/OoVi+XKCChwou67qWM8LZM3ENaNEwt6ylKM8HohoWMm5XQISGAN+ypc8bziriqiatL4Ri80tAaeyAzAUU8ldWQO+Si8Y4XG41manfY2b0sxeZXgJq04XP+Yuj0WgWmYEiUZvdYkPjUUOlOghC9LzGlFRW48mTrKfXzBOXBCwOv2QJGxlFO9xuDLvj1Qxmz0u6zaXc6mv4P507xe20AQ9QhQ01ZcaOJcH0XOhLAXd1rS6IHTw1OdJ9+sbwmROFTO/KDPfHPhtq01qG3t1+RbXwawB89hZVVSCNiFkLuWK9Dv+IdPcCV+jA6472g8e+vW/3oSW9qeRETcs4uJHSCyyJ4xNHKm+NmVS4qmjW5hNfp+BX4V6kptz3DEHTu3OpngxmWe3OIlBHTh5tLFt2T9WfWo/+ONqVnOz1uZl3qJ/k8hpEQl3CAt1dZVOtr1hOHvnZslVtzA4OmylMTzyZNM/A5OSX2OduHxMpLc1BczG7zY6fczrTx+yNx1dgre5PQvNLwQFHIHVeqaHzyh0ea4bytXvjsWAQ5HFxsK5pg4RJXyN5oKobK0oadBwImG3jJcPM7MKslYHnCZKEZThNOJbUjD8WyCxYWjo0MefWyrtOhPJPBwJDVaU7ReRiDxBnQZ+MJ9oPGE7ascWRDz386tunRyJF/ge8HcEzQrqeWyXJlmcoUCdm2awh+C6kkHFCaRVSwzTn/FDG4O807oj1Zd35U+0Bm6IuJslMQ93+3q5+Ky6u8M4WhM5AHKrg4kOezXxKVfut9S2hX9WWeyswHRVwRmxMQOc+PbznC9JyUSeoneYsByqXEywjSAFJQBfGs5IgY8bdMKr3jru+OSeelR/0BApJpL0Tdu85BJaiQphRMRES0ZDoObZ7t5rpeLRuY+doVK0LbddMQXkyl039K6O2ocxCFiLAg1znWymVKgQRRQbwD5jQoqqRPPrq56wKFpV5zb74WdTWL1a1hH/XpwRsEa3OwEqs1c2GLroFQ85F9CMStTyyuin0VO1031zk3y5OKJZS47N0MroFiU3+YmgXllmHy9RWndV715IlM4Y0cG504LEB5CAtpdcVna5dOnf2mZC+VLV7qJbLwfHjp6F1XwfcPH0ieFQOkfa9x7y+kd9/tW69HckkEgQwW7gxmWTun+HTRFyt8D0jQOzIdUb/bC0OfBez5Fz04T+Dpv+yfkfsbOzXlgcew30OSoVS93H4eXxvujpDLr0S90xCL4kbhvEaJ9IhDJPHVm8LPVFTOWQedmNuVJIJen823v3hxQCbYyQP8z+CQ4bW3PaerX2A89ncf0qy8gNChWR3OF55uHbG36cFXW71j5UsVhdYVAW6Q1GIRZLQtfsTUHQRnXjng8+/sGJpQhiiBJU10WRWHS2RtVuQ+Syu9P0Lp7A93B35KOD311BB/Bkt826apI73z66qkN1dN93/PxgNCXRREJr2ZL8yqiu8JcTgowmTgpTQWw2S/R4y1Sfrm0KPL6oYMo+CcCHoAQGurfQuwHAj8Z7Y7zZge0mWVAbq8rnkc1SyjWdMWmorKPj58ucXlam847nurl5HotdDLKoTYuEeOLO/DbLdcTEsWNVRuXjZD5fPuwmNq6fREt0U2NyubPjZTUgeFlf4n0ZX3xmKhLcV+v334/uZyL726IKfymnGe2YMVwc9N0oSvYdzshl75pmo7H2rPg5v6LNwZWA5tph5gwo/nqvmc6mVFottJZ7TiqFShIyi1fRIfH89CtAFVGjpePil8y09f6LTq9qV+7Ebe39NcxSZLPpwbYXv25lUZKtMXUKxkMlZQttf+M2GQr1r87/HD340K9YZtcS68pBNoJ5TsigYW5Gb8p0H/+AqLn36iduvt2Iva0TjseMBn3c2zfHNddji3Y+xScDoOtIaP1Fc4Z3GgFWg2xKd05NKD9/0xsFw0mwlMeFp0WS03eNxjyfA5DWtke2mUPeWeScolM7kROSzyciGIyokx1NvGWUkKAxyLJvOf6Q65OsRcJBSomBi0/Y1RzA1fJ4b+q97g75xjMK3kHS992Zr9GQf4AsF+/r169lNE4ZWJg5sfSBx9MDU+KkeX1ZXqXvs1NToqjk7vcWjful2u/+ElrlkObho6hzgP033N0NlgMvPLsPQmIA5r4px8dtfXQxw/46Ojg5fsrtzTCYWG624PJYhI4Z3ECLvCQQCZu97uRfBWh1IqcSwZ5NZojrUjJHUlbhXdOrRfBHOr4XCGZXkPDb+Co0n87rLFeBAw+YNCyKxXBTHPRbJKYMzkYG8R8GV1KzX5wu0aJp/LHrFHEq0d+s+7jn2pRa+XCQD2ddXduz++znheXSPz7D8DMNxbCelchH+DkmEFCM4bDz0BFAyTNf1TxiVMWNDLGfkOymxCJmKEoL7MTbTQKXrMIlJOBhA7vKXffKSMvcUTtisvBDvXNSlByL45a4xOxvM3D/ASQi+oAWJSQkR/BBnrBTrKhISVoz9XBJzQ4xQnoNsfheoyjcx66OhjMNcAiIRNhprfEYQ1kuZKEWYzv08+tL5BAR78zvxAUCA5rT/NnPLNbEw3pQuCfrGmHxQsuSiIkudhmwkLRwbYjSV2ZdTQ1BdKGlDDcdCTaCVBG2BnNkBcqarQk/rLG/lXFEk2UgZRMa5gG6ta06Y/fnZnILx68Rxbw1wciLbGt7YT10v2R5eriWv8T6coHq+gZR2utDJuw3bwwf75fl/CdgcFsqCLUQ606bq0Xf7qey1cumLGt/sjDAWzbFMf0c1UGchC6f6h8mKMYUQ6WaTy5Oc9nZ/7A5aC+MDuMJeHPQkUr3xgTwLNpOg3++ZjZPGu8zZG8bsYV3TNp7aGd99odo96Fx6diEUeN02F7NKxWCReg80Rw+fz6D6rTVvnMPncFmewM8qUH1dJt5z+IuR8Jd6xaADfI6kpOYm3zgda66Uj247b8DX10baHL6nDXwa0c4irzc1XXBo+FfABzPgPmGrp3lm4i9nfnts07lTEZM2SkAfyuray7/eEW8fcKAPdOG1WmeOoJwWdh89E3mj7pzvdyyuCJhdGDHAeAs7ocRA5RvMFqaLg65RukzHgEHz2En9sZ9YVI/2OpmXPqUL/UOtteejv+XRy6AFjC5biaOc4fhI9aiRiu85p9fFltZfhZxqmkH4OrRux0CtOyjrsClU3xdhHL7HdC42rGvta9zPUkbza0wypd9Bbz6UTYY2X2qedb4yBqWFzYd0IwK+B/AbAxT72QjO3Pae3B474AiCgvOpuYjfi8/h1q1uSUb+FusOWgv3WRnHMxarwMGiZRgO9IKCGklzLIuDu0kULb/qPMsPFPigtPC5tRgH6FSb4nY4ZDqfSHQW9sevrW3t2Xqumw8UrLnufwEiPdShXj8REQAAAABJRU5ErkJggg==",I="data:image/png;base64,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",xe="/Porto_Seguro-REACT/docs/assets/porto_seguro.e00133d3.png";const me=p.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  padding: 14px 21px 16px 21px;
  max-height: 60px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 6px #00000024;
  background: #fefefe 0% 0% no-repeat padding-box;

  text-transform: uppercase;

  div.imageContainer picture:first-child {
    padding-right: 5.33vw;
  }

  div.imageContainer picture:nth-child(2) {
    padding-left: 5.33vw;
  }

  @media (min-width: 1024px) {
    position: fixed;
    max-height: 92px;
    padding: 24px 30px 25px 30px;
    div.imageContainer {
      display: flex;
      align-items: center;
    }

    div.imageContainer picture:first-child {
      padding-right: 22.5px;
      padding-left: 20px

    }

    div.imageContainer picture:nth-child(2) {
      padding-left: 22.5px;
    }
  }
`,he=p.a`
  display: flex;
  flex-direction: column;
  justify-content: ${n=>n.active?"center":"space-between"};
  width: 35px;
  height: 22px;
  cursor: pointer;
  position: relative;
  span {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background-color: #000;
    transition: 0.3s;
  }

  span:first-child {
    transform: rotate(${n=>n.active?"135deg":"0"});
    position: ${n=>n.active?"absolute":"static"};
    left: -0.5px;
  }
  span:nth-child(2) {
    display: ${n=>n.active?"none":"block"};
  }
  span:nth-child(3) {
    transform: rotate(${n=>n.active?"-135deg":"0"});
    position: ${n=>n.active?"absolute":"static"};
    left: 0.5px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`,ge=p.nav`
  position: fixed;
  width: 100vw;
  height: calc(100% - 60px);
  background-color: #9a6d0c;
  top: 60px;
  left: 0;
  visibility: ${n=>n.active?"visible":"hidden"};
  color: #fff;
  display: flex;
  opacity: ${n=>n.active?"1":"0"};
  flex-direction: column;
  justify-content: space-between;
  transition: 0.3s;

  ul {
    li {
      font-size: 21px;
      letter-spacing: 4.2px;
      border-bottom: 1px solid #efc566;

      a {
        width: 100%;
        padding: 12px 20px;
        display: block;

        span {
          font: normal normal 600 21px/28px Open Sans, sans-serif;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    position: static;
    background-color: #fff;
    color: #d6a430;
    flex-direction: row-reverse;
    opacity: 1;
    visibility: visible;

    ul {
      display: flex;
      align-items: center;

      li {
        font-size: 20px;
        border-bottom: none;
        text-transform: none;

        a {
          width: 100%;
          padding: 12px 20px;
          display: block;

          span {
            font: normal normal 600 20px/27px Open Sans, sans-serif;
            display: inline-block;
            text-align: justify;
            text-align-last: justify;
            letter-spacing: 0em;
          }

          span:first-child() {
            width: 56px;
          }
        }
      }
    
    }
  }
`;function S(n){return i("picture",{children:[e("source",{media:"(max-width: 1023px)",srcSet:n.srcSetMobile}),e("source",{media:"(min-width: 1024px)",srcSet:n.srcSetDesktop}),e("img",{src:n.src,alt:"Logo Norte a Sul"})]})}const be=p.button`
  background-color: ${n=>n.color};
  display: flex;
  border-radius: 12px;
  padding: 12px 44px;
  margin: 8px 20px 0;
  max-height: 75px;
  width: 100%;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  justify-content: flex-start;
  cursor: pointer;

  span:nth-child(2) {
    text-align: left;
    margin-left: 10px;
    font: normal normal bold 15px/20px Open Sans, sans-serif;
    color: #fff;
    text-transform: uppercase;
  }
`,Ae=p.button`
  background-color: ${n=>n.color};
  border-radius: 19px;
  padding: 9px 21px 10px 21px;
  max-height: 37px;
  align-items: center;
  box-shadow: 0px 3px 6px #0000008a;
  font: normal normal normal 600 13px/18px Open Sans, sans-serif;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;

  @media (min-width: 1024px){
    padding: 15px 30px;
    max-height: 62px;
    font: normal normal 600 21px/28px Open Sans;, sans-serif;
    border-radius: 31px;
    letter-spacing: 2.1px;
  }
`,U=p.button`
  background-color: ${({color:n})=>n};
  border-radius: 16px;
  padding: 9px 36px 9px 35px;
  max-height: 31px;
  box-shadow: 0px 3px 6px #00000029;
  font: normal normal bold 9px/13px Open Sans, sans-serif;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;

  img{
    width: 12px;
    height: 13px;
    margin-right: 5px;
  }

  @media (min-width: 1024px){
    padding: 15px 30px;
    max-height: 62px;
    font: normal normal 600 18px/20px Open Sans;, sans-serif;
    width: auto;
    border-radius: 31px;
    letter-spacing: 1.5px;
    img{
      width: 18.5px;
      height: 20px;
      margin-right: 8px;
    }
  }

  @media (min-width: 1366px){
    font: normal normal 600 21px/28px Open Sans, sans-serif;
    letter-spacing: 2.1px;
`,ue=p(U)``,Y=n=>e(be,{color:n.color,children:n.children}),fe=({children:n,color:t})=>e(Ae,{color:t,children:n}),Z=r=>{var o=r,{children:n,color:t}=o,a=w(o,["children","color"]);return e(U,h(m({color:t},a),{children:n}))},we=r=>{var o=r,{children:n,color:t}=o,a=w(o,["children","color"]);return e(ue,h(m({type:"submit",color:t},a),{children:n}))},ve=p.div`
  text-align: center;

  span.textMenu: first-child {
    display: block;
    font: normal normal bold 15px/20px Open Sans, sans-serif;
    text-transform: uppercase;
  }

  span.textMenu: nth-child(2) {
    height: 34px;
    width: 100%;
    display: block;
    font: normal normal bold 25px/34px Open Sans, sans-serif;
  }

  span.finalText {
    height: 17px;
    width: 100%;
    display: block;
    font: normal normal normal 12px/17px Open Sans, sans-serif;
    text-transform: initial;
  }

  .buttonGroup {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;var Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAYAAACP3YV9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFCNDY3MjVDQThDMTExRUM4NjJDRjA5QzgwQjdBRjMyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFCNDY3MjVEQThDMTExRUM4NjJDRjA5QzgwQjdBRjMyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUI0NjcyNUFBOEMxMTFFQzg2MkNGMDlDODBCN0FGMzIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUI0NjcyNUJBOEMxMTFFQzg2MkNGMDlDODBCN0FGMzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz71cLgbAAADfUlEQVR42uzdsW4TQRDG8bVREFKQEFIoQhN4ACgpkxJaaOEtTB9HtOEFqEMbWihDCV0oaZwmFEGCAgoSKceslETGBGHvzt3Ozv1HGlmKYul8P3/js2/PHjRNE2ZqXfpFaL82AqVWgynICLhXYhtg0IMcSW+X3A4odCAbC9sCR3oNpcfsBh+J3Jfbewa25ZP0fUjSE/nNyLaswpEHaaVO4PABSQFJWYI8hsMH5AocPiCX4ch7HzmR2zUr2wNJOmS8bYAEEkgggfQKeV36Jyz1Q76WfgZL/ZCMVyCBBNJBnX+y85xd4SORllL5VfoWNPVDMl6BBBJIR5BHwdY5QTATIeP5wB9A1g/JeAWylbot/QUiIHsNGS+rW2e01g9pKZVAOoAEccGyuNJ8CxadRC6Fcqu+41mYl7DoQJYaryA6gIzjdAyHPuSu9GOSWD9kV6kE0QEk47QjyDY/5SGJHUK2lUqS6ACSJBaC1MQE0QEk49QA5GHI+zIjkmgEMieVd6Un7Ob6ITkdZQwyFRNIJ5BgGoQklT2HBNMgZCrmO+lH7O76IUmlQUgwgQTSGiSYjiDjksmlhPudSl9h19uBJJWOIHNW24FpCDInlWAag8zB/Cj9AIb6IUmlMUgwHUGC6Qjyu/SNxPv+kr4GiQ3I3FQeSN+BxQZkLubVwC/XmYF8K/0QzPohc1PJwY8hSDAdQYLpCBJMR5A70k+dY56fmz3xDKmRSqtHs42FJ1+X33yl8aBSVyW0UaM5npzNVB95gdTE/FAYcSy9veB9VmZgm7P326sqO7bD0ao9Zkut/RklIKbWZd9Xux8uWexdClILs+uDoC4RF3rsJSFrw7SG+MdjLw2piflG+knPEC8wLUBqYraRznhgs2n98wArkFYxa0CMdWAJUhsz96jW+jidrvfWILUxU9NZSxJNQ7aBuQhoTUm8gBwa3bDB2VGo9pNjxyGiifeRltJZ2zitYrR2gTkNGi9E2g31VjWQbWJ6KLOvkf9KzyvM6n2NJJ3ORuts5VyeACTpBBJMIAH1dNQ675FtL3+20Fsip8vSijtGK+MWyD6B9grSM2gvIT2C9hrSEyiQUzWRXgOSlAIJaj7kEKf/1iC0s4ZIs26SyLSKnxgdG9qeLSB1Kl7jeFhyagDZHuxn6eWORn8Asvs6DXrXppi5PpL6u/bm+J+N2T/8FmAAWoDcrtcYnH8AAAAASUVORK5CYII=",Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABfCAYAAACOTBv1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNGODUzNTY3QThDNTExRUNBOUMxQTQzNDc3MDU0RDQxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNGODUzNTY4QThDNTExRUNBOUMxQTQzNDc3MDU0RDQxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0Y4NTM1NjVBOEM1MTFFQ0E5QzFBNDM0NzcwNTRENDEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Y4NTM1NjZBOEM1MTFFQ0E5QzFBNDM0NzcwNTRENDEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz70mr46AAAEmklEQVR42uxdzW7UMBDuOEENWhUOFT1RpL2C4Ao3DrwGZ7jxMPAKIPEocAXR00q7C9pLUHtZrciKpiZZpVW6ZNdxbI/HP5ZyaVfJ+JvP428mtgOc8wPX2nq9zg8PDx+0/7ZcLr8eHR29cKkfQBh8bYZRdQyjYkhZln8awLlO4OtWAf+8fe/ZbPYyMl8zyCo42HhoGjjo2/aAz+BTn91RnZBG0O05gSF0QgfwIHvlef6BkP144DdqgmsEW7qdnJy8a99jMpmcUhu5JtQOVwDchfkHqDJfqkOLxeKtCrs1hTJro0An83vfaLVanY1GoyeOZ9RgHfw6M02SJKOe0BhyAtgEn3sE+tC+De4Xi8Ar28yxwZdhhYvA39h/fn7+yZQDpMPOdDp9Oh6Pv3nKdlWAwSj4JowI1QEsAq99HuAmwA8deO0OYBF4eyUGRskYzxzAdYDPI/DdrYcM5YPBr27+cd//J5PJ/YOA2/Hx8WuT5YXIej1zIsgyPwJveM4bNOHWi5A0saXrCmZk7Ao7plnPPR1RUv1iWENMwrHBsJ8RYkZwsZ8RDQlBsJ9F1ttj/y3wV6vVj10/XK/XvzF7UCVwD7330pbaMRlyuEkWuaJ8rq6uLhljd9DCTggs7h1qGEtlma/EwK5tPAGwXxhF2uAbCznVMy4BIAkMfCGZUcLOxcXF5xhw/ncKCvMVpaa35QZGvPNeV04ZYducB15U/e0TdgBhCPrMeL437OzLbLGZXCchocy618zHKqaFuASFq0y42OwPogBXjfC/2MwPkf2cktqJ7LcsNaMDiOt87x1gE/yg1/3UO+Q3E66g6ggE2O1lZXPD/Pl8/sqWZWVZFqGGH8zygg5wwTvmUyBB344sl8svikBsrjrU2iaVkPlFUfzKsuwRQXUDGu8NFvoDmC9TbDvAxsSu/DKFsgTtu7KZa76fUrveVEKR+SoKBzQrJTDF+u0kC4hJvaFn4XBXJCr18gIosI58bkAdfCe1vUAOQ5fUpBr7bYY/MGAnuMR81zNcPWEHKSvs4wBwnfW7wIfdKdng9ZZOOWE6nT5D6YCl3YiU5wMj2r69Ll8EPvWJ15QjULe4pgoPoewAkHSElYXAqcAgH15iUHgfIX32AjXN7V1jBFjjehssTljEzg7wQvAFq5chAm9G5/sgN20DL8Qnhh3JVhTFT10Kayf4gjpOkKyv9xNnWXYqCNVnOsJODDnDYryx43xjjNcozVlkvR3gI/P3tOawDqPLGIeUlFW+sAOesV2pT0aO+WqUUtdxjTzP8/fEQbf6wZpB4NfZ8Gg0eoxluM1stcKsBADl70oqxfwm4diwRRL4G5aJzmsmxvQNaXQA38X8PoUiY6Xk+t3peDz+bhLtev9r+7QnWbx02iILPnazce4DGilc2I1466q/SLdYLN5UUvBe+4f1RN4x0etYNgimRmPfVco62Ovamy/jgiBFNNwVJ6CpsNSC0VSdgC592VAgmhNmVb7WrPSlZ42AW7Ohz6kjN63eM5skyV1KCY8LDFdVOxt2IAC/zUbouUm6szUfoQcio6yT+Zx46u9tSyPg9to/AQYAdm8UzDvK1lkAAAAASUVORK5CYII=";const F=()=>i(ve,{children:[e("span",{className:"textMenu",children:"Fale Conosco Agora Mesmo:"}),e("span",{className:"textMenu",children:"4020-6440"}),i("div",{className:"buttonGroup",children:[i(Y,{color:"#F7B53D",children:[e("span",{children:e("img",{src:Se,alt:"Whatsapp",width:51,height:51})}),e("span",{children:"Clique aqui para enviar uma mensagem"})]}),i(Y,{color:"#F7B53D",children:[e("span",{children:e("img",{src:Ce,alt:"Telefone",width:51,height:51})}),e("span",{children:"Clique aqui para Ligar"})]})]}),e("span",{className:"finalText",children:"Hor\xE1rio de Atendimento de 8h \xE0s 17h"})]});function Me(){const[n,t]=l.exports.useState(!1);return e("header",{children:i(me,{children:[i("div",{className:"imageContainer",children:[e(S,{src:D,srcSetDesktop:ce,srcSetMobile:D}),e(S,{src:I,srcSetDesktop:xe,srcSetMobile:I})]}),i(he,{active:n,onClick:()=>{t(!n)},children:[e("span",{}),e("span",{}),e("span",{})]}),i(ge,{active:n,children:[i("ul",{children:[e("li",{children:e(g,{smooth:!0,duration:500,to:"sobre",style:{cursor:"pointer"},children:e("span",{children:"Sobre"})})}),e("li",{children:e(g,{smooth:!0,duration:500,to:"hospitais",style:{cursor:"pointer"},children:e("span",{children:"Hospitais"})})}),e("li",{children:e(g,{smooth:!0,duration:500,to:"beneficios",style:{cursor:"pointer"},children:e("span",{children:"Benef\xEDcios"})})}),e("li",{children:e(g,{smooth:!0,duration:500,to:"servicosEspeciais",style:{cursor:"pointer"},children:e("span",{children:"Servi\xE7os especiais"})})}),e("li",{children:e(g,{smooth:!0,duration:500,to:"contato",style:{cursor:"pointer"},children:e("span",{children:"Contato"})})})]}),e(F,{})]})]})})}var z="/Porto_Seguro-REACT/docs/assets/Grupo_309.a674bf07.jpg",Ee="/Porto_Seguro-REACT/docs/assets/Grupo_de_m\xE1scara_14.eca8040c.png";const Oe=p.div`
        position: relative;
        width: inherit;
        height: calc(100vh - 60px);
        margin-top: 60px;
        left: 0;
           
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        z-index: -1; 
      }

      div.ImgContents{
        letter-spacing: 0px;
        color: #FFFFFF;
        margin: 0 16px;
        display: flex;
        flex-direction: column; 
        justify-content: flex-end;
        height: 100%;

          
        h1{
            font: normal normal bold 30px/41px Open Sans, sans-serif;
            text-shadow: 0px 3px 4px #00000082;
            margin-bottom: 8px;     
            margin: 0 3px;       
        }

        span.planGoldHeader{
            display:none; 
        }
  
        hr{
          width: 50%;          
          border: 1px solid #FFF;
          margin-top: 8px; 
          margin-bottom: 17px
        }

        div.valueSection{
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            margin-left: 1px
            

            button{
                margin-right: 16px;
                margin-bottom: 9px;
            }
    

            div.ContentValue{
                font: italic normal normal 17px/26px Open Sans, sans-serif;
                display: flex;

                span{
                    display: flex;
                    align-items: center;
                    white-space: nowrap;              
                }
    
                span.currency{
                    font-weight: bold;
                    padding:0 3px;
                }
    
                span.value{
                    font: normal normal bold 33px/26px Open Sans, sans-serif;
                    padding-top: 9px;
                    widht: 57px;
                }
            }
        }

        span.valueRefer {
            font:normal normal normal 8px/10px Open Sans, sans-serif;
            letter-spacing: 0px;
            opacity: 0.5;
            height: 31px;
            display: block;
            margin-bottom: 30px;

        }
      }
  @media(min-width: 1024px){
        height: calc(100vh - 92px);
        margin-top: 92px;

        div.ImgContents{
            letter-spacing: 0px;
            color: #FFFFFF;
            margin: 0 32px;
            display: flex;
            flex-direction: column; 
            justify-content: flex-end;
            height: 100%;
            width: 529px;

            h1{
                font: normal normal bold 40px/55px Open Sans, sans-serif;
                text-shadow: 0px 3px 4px #00000082;
                margin-bottom: 18px;  
                width: 438px;         
            }

            hr{
                margin-left: 0.5px;
                width: 14.64vw;
            }

            span.planGoldHeader{
                display: block;
                width: 327px;
                font: normal normal normal 25px/34px Open Sans, sans-serif;
                margin-bottom: 18px;
            }
      
            div.valueSection{
                display: flex;
                align-items:top;
    
                button{
                    margin-bottom: 0;
                }
        
    
                div.ContentValue{
                    font: italic normal normal 22px/34px Open Sans;, sans-serif;
    
                    span{
                        display: flex;
                        align-items: flex-start;
                        white-space: nowrap;              
                    }
        
                    span.currency{
                        font: normal normal bold 35px/54px Open Sans, sans-serif;
                        margin-left: 17px;
                    }

                    span.currency:last-child{
                        font: normal normal bold 30px/43px Open Sans, sans-serif;
                        margin-left: 0;
                    }
        
                    span.value{
                        font: normal normal bold 54px/43px Open Sans, sans-serif;
                        padding-top: 12px;
                    }
                }
            }
    
            span.valueRefer {
                font:normal normal normal normal 12px/15px Open Sans, sans-serif;
                letter-spacing: 0px;
                opacity: 0.5;
                height: 47px;
                width: 476px;
                display: block;
                margin-bottom: 30px;
    
        }
    }
`,ye=p.div`
  margin: 40px 0px;
  padding: 0 16px;
  width: 100%;
  display: block;

  p {
    margin: 21px 0;
    font: normal normal normal 15px/20px Open Sans, sans-serif;
    color: #4b4b4b;
  }

  @media (min-width: 1024px) {
    margin: 42px 0px;
    padding: 0 103px;

    p {
      margin-top: 19px;
      margin-bottom: 18px;
      font: normal normal normal 20px/27px Open Sans, sans-serif;
      color: #4b4b4b;
    }

    div {
      display: flex;
      justify-content: space-between;
    }

    div.cardsContainer {
      gap: 16px;
    }
  }
`,Be=p.div`
  padding: 0 16px;

  button{
    justify-content: center;
  }

  @media (min-width: 1024px) {
    padding: 0 103px;

    div.cardsContainer {
      padding: 0 39px;
      display: flex;
      justify-content: flex-start;
      gap: 32px;
      margin-bottom: 60px;
    }
  }
`,Ne=p.div`
  padding: 0 18px;
  display: flex;
  flex-direction: column;
  align-self: center;
  div.KnowMoreContent1 {
    display: flex;
    margin: 21px 0;
    img {
      width: 101.22px;
      height: 101.23px;
      margin-right: 12.4px;
    }

    p {
      font: normal normal normal 15px/20px Open Sans, sans-serif;
      letter-spacing: 0px;
      color: #404040;
    }
  }
  div.KnowMoreContent2 {
    display: flex;
    flex-direction: column;
    width: 100%;
    div.FormDiv {
      align-items: center;
      margin-bottom: 26px;

      form {
        width: 100%;
        display: flex;
        flex-direction: column;
         align-items: center;
}
        label {
          display: flex;
          width: 100%;
          flex-direction: column;
          font: normal normal bold 12px/17px Open Sans, sans-serif;
          color: #e8bb15;
          text-transform: uppercase;
          margin-bottom: 20px;

          input {
            border: 1px solid #9a6d0c;
            padding: 6px;
            margin-top: 4px;
          }
        }
      }
    }

    div.recaptcha {
      margin-bottom: 19px;
      div {
        display: flex;
        justify-content: center;
      }
    }

    button {
      box-shadow: 0px 3px 6px #00000029;
      font: normal normal 600 15px/20px Open Sans, sans-serif;
      margin: 0 calc(41px - 16px);
      padding: 12px 61px 11px 61px;
      max-height: 100%;
      letter-spacing: 3px;
    }
    span.textMenu:first-child {
      color: #4b4b4b;
      letter-spacing: 0px;
      margin-bottom: 6px;
    }

    span.textMenu:nth-child(2) {
      color: #e8bb15;
      letter-spacing: 0px;
      margin-bottom: 13px;
    }

    div.buttonGroup {
      button {
        margin: 0;
        margin-bottom: 26px;
        font: normal normal bold 15px/20px Open Sans, sans-serif;
        letter-spacing: 0px;
        justify-content: flex-start
      }

      button:last-child {
        margin-bottom: 10px;
      }
    }
    span.finalText {
      color: #a7a7a7;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 1024px) {
    padding: 0 103px;

    div.KnowMoreContent1 {
      margin: 60px 0 83.69px 0;
      align-items: center;

      img {
        width: 138.3px;
        height: 138.3px;
        margin-right: 41.7px;
      }

      p {
        font: normal normal normal 20px/27px Open Sans, sans-serif;
      }
    }
    div.KnowMoreContent2 {
      flex-direction: row;
      align-items: center;
      div.FormDiv {
        border-right: 1px solid rgba(112, 112, 112, 0.24);
        width: 50%;
        padding-right: 53.76px;
        form {
          width: 100%;

          div.recaptcha {
            margin-bottom: 19px;
            div {
              margin-left: 0;
              display: flex;
              justify-content: center;
            }
            p{
              text-align: center;
            }
          }

          label {
            font: normal normal bold 18px/24px Open Sans, sans-serif;
            color: #ecc63c;
            letter-spacing: 0px;

            input {
              border: 1px solid #d0bc90;
              padding: 16.5px;
              margin-top: 11.48px;
            }
          }
          label:last-child {
            margin-bottom: 41.37px;
          }
        }
      }

      div:last-child {
        width: 407px;
        margin-left: 53.76px;
        display: flex;
        flex-direction: column;
        align-items: center;

        div.buttonGroup {
          width: 407px;
        }
      }
    }
  }
`,Re=p.h2`
  width: 251px;
  white-space: nowrap;
  font: normal normal bold 22px/ 30px Open Sans, sans-serif;
  letter-spacing: 0px;
  color: #171717;
  margin-bottom: 17px;

  @media (min-width: 1024px) {
    width: 330px;
    font: normal normal bold 29px/ 39px Open Sans, sans-serif;
    margin-bottom: 18px;
  }
`,De=p.hr`
  border: 1px solid #f7b53d;
  width: 162px;
  height: 2px;

  @media (min-width: 1024px) {
    width: 202px;
  }
`,C=({children:n})=>i(M,{children:[e(Re,{children:n}),e(De,{})]}),Ie=p.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  margin-bottom: 23px;
  padding-bottom:${n=>n.active?"0":"11.67px"};


  img {
      
    margin-bottom: 9px;
    width: 100%;
  }

  h3 {
    width: 162px;
    height: 20px;
    font: normal normal bold 15px/20px Open Sans, sans-serif;
    color: #e8bb15;
    margin-bottom: 7px;
    text-align: center;
  }

  button.arrow {
    width: 20px;
    height: 12.33px;
    position: relative;
    cursor: pointer;
    transform: rotate(${n=>n.active?"180":"0"}deg);
    transition: .6s;
    background: none;
    border: none;
    
  
    span {
      display: block;
      width: 11px;
      height: 2.5px;
      background-color: #bfbfbf;
      position: absolute;
      top: 0;
    }

    span:first-child {
      transform: rotate(45deg) translate(50%,0 );
      left: -2.3px;
    }

    span:last-child {
      transform: rotate(-45deg) translate(-50%,0 );
      left: calc(50% + 2.3px);
      
    }
  }

  @media(min-width: 1024px){
  max-width: 27.52vw;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  margin-bottom: 23px;
  overflow: hidden;
  padding-bottom: 11.67px;

  img {
      
    margin-bottom: 9px;
    width: 100%;
    height: 230px;
  }

  h3 {
    width: 162px;
    height: 20px;
    font: normal normal bold 15px/20px Open Sans, sans-serif;
    color: #e8bb15;
    margin-bottom: 7px;
  }

  button.arrow {
    width: 20px;
    height: 12.33px;
    position: relative;
    cursor: pointer;
    transform: rotate(${n=>n.active?"180":"0"}deg);
    transition: .6s;
    background: none;
    border: none;
    
  
    span {
      display: block;
      width: 11px;
      height: 2.5px;
      background-color: #bfbfbf;
      position: absolute;
      top: 0;
    }

    span:first-child {
      transform: rotate(45deg) translate(50%,0 );
      left: -2.3px;
    }

    span:last-child {
      transform: rotate(-45deg) translate(-50%,0 );
      left: calc(50% + 2.3px);
      
    }
  }
  div.contents {
    color: #4b4b4b;
    letter-spacing: 0px;
    color: #4b4b4b;
    display: block;
    box-sizing: content-box;
    height: ${n=>n.active?"auto":"0"};
    opacity: ${n=>n.active?"1":"0"};
    visibility: ${n=>n.active?"visible":"hidden"};
    padding: 0 27px 0 24px;
    transition: .6s;  

    p {
      margin: 0 0 17px 0;
      color: #4b4b4b;
      font: normal normal normal 12px/17px Open Sans, sans-serif;
    }

    hr {
      margin: 19.5px 0;
      width: 289px;
      border: 0.5px solid #c5ccd9;
    }

    div.complements {
      display: flex;
      justify-contente: flex-start;
      font: normal normal normal 12px/17px Open San,sans-serif;
      span {
            padding-right: 15px; 
            padding-left: 3px;    
            a 
      }
      .bold {
        font: normal normal bold 12px/17px Open Sans, sans-serif;
        padding: 0;
      }
    }
    div.complements:last-child{
      margin-bottom: ${n=>n.active?"36px":"0"};
    }
  }
}`,Q=p.div`
  height: 100%;
  margin: 18px 0 24px 0;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 162px;
    object-fit: cover;
    object-position: center center;
  }

  div.cardContainer {
    margin: 7.5px 0 33px 0;
    padding: 0 27px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font: normal normal bold 15px/20px Open Sans, sans-serif;
      letter-spacing: 0px;
      color: #e8bb15;
      text-align: center;
      margin-bottom: 7.94px;
    }

    p {
      color: #404040;
      letter-spacing: 0px;
      font: normal normal normal 12px/17px Open Sans, sans-serif;
      margin-bottom: 17.56px;
    }

    button {
      width: 271px;
    }
  }
  @media (min-width: 1024px) {
    margin-top: 38px;
    width: 504px;

    img {
      height: 266px;
    }

    div.cardContainer {
      margin: 42.26px 0 95px 0;
      padding: 0 51px;

      h3 {
        font: normal normal bold 30px/41px Open Sans, sans-serif;
        margin-bottom: 30px;
      }
      p {
        color: #1a1a1a;
        font: normal normal normal 25px/33px Open Sans;
        min-height: 198px;
        margin-bottom: 19.7px;
      }

      button {
        width: 100%;
        font: normal normal bold 14px/19px Open Sans, sans-serif;
      }
    }
  }
`,Ye=p(Q)`
  img {
    margin-bottom: 0;
    height: 24.32vh;
  }
  div.cardContainer {
    margin: 15.5px 0 21.56px 0;
    padding: 0 32px;
    h3 {
      width: 195px;
      margin-bottom: 7.94px;
    }
  }
  @media (min-width: 1024px) {
    height:inherit;
    img {
      height: 256px;
    }
    div.cardContainer{
      margin: 16.6px 0 81.49px 0;
      h3{
        width: 375px;
        margin-bottom: 25.04px
      }
      p:last-child{
        min-height: auto;
      }
    }
  }
`,ze=p.div`
    color: #4b4b4b;
    letter-spacing: 0px;
    color: #4b4b4b;
    display: block;
    box-sizing: content-box;
    height: ${n=>n.active?"auto":"0"};
    opacity: ${n=>n.active?"1":"0"};
    visibility: ${n=>n.active?"visible":"hidden"};
    padding: 0 27px 0 24px;
    transition: .6s;  

    p {
      margin: 0 0 17px 0;
      color: #4b4b4b;
      font: normal normal normal 12px/17px Open Sans, sans-serif;
    }

    hr {
      margin: 19.5px 0;
      width: 100%;
      border: 0.5px solid #c5ccd9;
    }

    div.complements {
      display: flex;
      justify-contente: flex-start;
      font: normal normal normal 12px/17px Open San,sans-serif;
      span {
            padding-right: 15px; 
            padding-left: 3px;    
            a 
      }
      .bold {
        font: normal normal bold 12px/17px Open Sans, sans-serif;
        padding: 0;
      }
    }
    div.complements:last-child{
      margin-bottom: ${n=>n.active?"36px":"0"};
    }

    @media(min-width: 1024px){
      width: auto;
      box-shadow: 0px 3px 6px #00000029;
      border-radius: 12px;
      padding: 61.5px 51.75px;
      

      p{
        font: normal normal normal 20px/27px Open Sans, sans-serif;
        width: 50%;
      }
      hr {
        width: 0.5px;
        margin: 0 30.5px;
        height: auto;
      }

      div.complementsContainer{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
      }
      div.complements { 
        display: flex;
        justify-contente: flex-start;
        font: normal normal normal 20px/27px Open Sans,sans-serif;
        span {
              padding-right: 15px; 
              padding-left: 3px;    
              a 
        }
        .bold {
          font: normal normal bold 20px/27px Open Sans, sans-serif;
          padding: 0;
          margin-right: 10px;
        }
      }
      div.complements:last-child{
        margin-bottom: 0;
      }
  
    }
`;var Ge="/Porto_Seguro-REACT/docs/assets/call-icon.55439390.png",We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAEACAYAAAA5ug0wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVDOTZFN0ExQThDODExRUM5RTcwQ0Y1NUUxOURFMzE1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVDOTZFN0EyQThDODExRUM5RTcwQ0Y1NUUxOURFMzE1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUM5NkU3OUZBOEM4MTFFQzlFNzBDRjU1RTE5REUzMTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUM5NkU3QTBBOEM4MTFFQzlFNzBDRjU1RTE5REUzMTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4RqSyRAAAGrElEQVR42uzdSa4bNxRG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";const J=({value:n,active:t})=>{const{dataCard:a}=E();return i(ze,{active:t,children:[e("p",{children:(n==null?void 0:n.detail)||(a==null?void 0:a.detail)}),e("hr",{}),i("div",{className:"complementsContainer",children:[i("div",{className:"complements",children:[e("span",{children:e("img",{src:We,width:11,height:16,alt:"Icone Mapa"})}),e("span",{className:"bold",children:"Endere\xE7o:"}),e("span",{children:(n==null?void 0:n.address)||(a==null?void 0:a.address)})]}),i("div",{className:"complements",children:[e("span",{children:e("img",{src:Ge,width:11,height:16,alt:"Icone Telefone"})}),e("span",{className:"bold",children:"Telefone:"}),e("span",{children:(n==null?void 0:n.phone)||(a==null?void 0:a.phone)})]})]})]})},ke=({values:n})=>{const[t,a]=l.exports.useState(!1),[r,o]=l.exports.useState(window.innerWidth),{HandleChangeData:s}=E(),d=()=>{a(!t)};return l.exports.useEffect(()=>{s(t?n:null)},[t]),l.exports.useEffect(()=>{const c=()=>{const u=window.innerWidth;o(u)};return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),i(Ie,{active:t,children:[e("img",{src:n.image}),e("h3",{children:n.name}),i("button",{className:"arrow",onClick:d,children:[e("span",{}),e("span",{})]},1),r<1024&&e(J,{value:n,active:t})]})},je=({children:n})=>e(Q,{children:n}),Ue=({children:n})=>e(Ye,{children:n});var Ze="/Porto_Seguro-REACT/docs/assets/02_Recepcao_principal-860x560@2x.5f235232.png",Fe="/Porto_Seguro-REACT/docs/assets/human-hand-inserting-coin-piggybank@2x.25cfda25.png",Qe="/Porto_Seguro-REACT/docs/assets/phone-call.4f633798.svg";const Je=p.div`
    display: ${n=>n.open?"flex":"none"};
  width: 100vw;
  height: 100vh;
  top: 30px;
  position: fixed;
  background-color: ${n=>n.open?"rgba(0,0,0,0.5)":"0"};
  justify-content: center;
  align-items: center;

  div.Content {
    background: #fff;
    width: 84.42vw;
    height: auto;
    border-radius: 12px;
    opacity: 1;
    box-shadow: 0px 3px 6px #00000029;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 14px;

    button.closeModal {
      margin-top: 18px;
      margin-right: 21px;
      width: 14px;
      height: 14px;
      background: none;
      border: none;
      align-self: flex-end;
      position: relative;
      cursor: pointer;
      span {
        content: "";
        display: block;
        height: 2px;
        width: 18px;
        background-color: #c9c9c9;
        position: absolute;
        top: 0;
      }

      span:first-child {
        transform: rotate(-45deg) translate(-50%, -50%);
        left: 50%;
      }
      span:last-child {
        transform: rotate(45deg) translate(50%, -50%);
        left: -50%;
      }
    }
    div.ContentModal {
      padding: 0 44px;
      width: 100%;

      h2 {
        font: normal normal bold 19px/26px Open Sans, sans-serif;
        letter-spacing: 0px;
        color: #e8bb15;
        margin-bottom: 10px;
      }
      li {
        font: normal normal normal 12px/20px Open Sans;
        letter-spacing: 0px;
        color: #1a1a1a;
      }
      .provincy{
          margin-bottom: 40px;
      }
    }
  }
  @media(min-width: 1024px){
    top: 46px;
    div.Content{
      width: 686px;

      div.ContentModal{
        padding:0 41px 0 42px;
        width: 100%;
        height: auto;
  
        h2{
          font: normal normal bold 30px/41px Open Sans, sans-serif;
          margin-bottom: 15px;
        }
  
        li{
          font: normal normal normal 20px/27px Open Sans, sans-serif;
        }
      }  
      button:last-child{
        width: 481px;
        font: normal normal bold 17px/23px Open Sans, sans-serif;
        padding:11px 61.25px 10px 61px; 
        letter-spacing: 0px;
        border-radius: 22px;
        margin-bottom: 49px;
      }      
    }
  }
`;var He="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAACfCAYAAADaiWqGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjIwODMyQTI4QTk0RjExRUNCRUQ2RkQxNjNDRDhBOTlGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjIwODMyQTI5QTk0RjExRUNCRUQ2RkQxNjNDRDhBOTlGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjA4MzJBMjZBOTRGMTFFQ0JFRDZGRDE2M0NEOEE5OUYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjA4MzJBMjdBOTRGMTFFQ0JFRDZGRDE2M0NEOEE5OUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4euP1bAAADFklEQVR42uzdT44SURDAYZi4cuVJiFfSc3gKwg4SNrqA43ASb9AOgsnEPzN2uulXVe/7JbhygdOf9ap7SFgNw7CK+Nput++jvreq/6719Y+ghX1jM7SO+KaeVhIMgkEwCAbBIBgEg2AQDIJBMAgGwSAYBINgEAyCQTAIBsEgGASDYBAMgkEwCAYJBsEgGASDYBAMgkEwCAbBIBgEg2AQDIJBMAgGwSAYBINgEAyCQTAIBsGg3jBcLpfvq9v3SEZ6VS7Uz/p+/W8YNpvNh8Ph8Nn/jf46n8/frtf/RvTF19/udruPg7ppv99/enn9//g+5PtfUPGOx+OX36/9a1/eraLdT4DVf2EwIfqaCG9isEPU3xFGYXBk1D8aRmEwIepPhFEYgKgPYRSG6+u+fChJp9Pp65jrOwqDHaLWjjAZgwlRbyJMwmCHqLEjzIYBiFoQJmOwQ+TeEWbHYELknwizYhj8LqNZr/2uoRkGR0bOo+FhGEyInBPhYRjsEHl2hEUweDAV74FSUwx2iPg7wqIY7BA5JsJiGOwQcXeEJhiAiA9hUQx2iNgQFsdgQsSF0ASDpbLNA6WwGBwZ7W4fQ2IwIdrcPobFYIdouyOEw2BCtJ8IoTD0vEO03BHCYuhxQrS6a0iBoacdIsKOEB5DD0dGpKMhPIbKEyLiRAiPoSKIyBDCYxgKfWIqyu1jagwVdoioO0JKDJknRIaJkA5Dxh0i+o6QGkMmENEeKJXEkGGHyLIjlMAQeUJknAjpMUQEkRlCegyRjoysR0MpDBEmRPaJUApDSxDZbh+7wNDiwVSmB0rdYVhyh6iwI5THsMSEqDYRSmN45A5RaUfoBsMjQFSGUB7DnDtExR2hOwxzTIjqE6ErDMOEj+FXeaAEw8Qjo4ejoVsMYyZE1dtHGEbuEL3sCDC8MSF6nAjdY/jbDtHbjgDDPyZEzxPh12v9U4T03JMfgWAQDIJBMAgGwSAYBINgEAyCQTAIBsEgGASDYBAMytO755cPQcpkEAyCQTAIBsEgGASDYBAMgkEwCAbBIBgEg2BQ7H4IMAB0RD/CEnK46wAAAABJRU5ErkJggg==";const Le=({children:n,setClose:t,open:a})=>e(Je,{open:a,children:i("div",{className:"Content",children:[i("button",{className:"closeModal",onClick:t,children:[e("span",{}),e("span",{})]}),e("div",{className:"ContentModal",children:n}),i(Z,{onClick:t,color:"#9A6D0C",children:[e("span",{children:e("img",{src:He,alt:"\xCDcone de download"})}),"Baixe a Lista Completa de Hospitais"]})]})}),Te=()=>{const[n,t]=l.exports.useState(window.innerWidth),[a,r]=l.exports.useState(!1),{data:o}=k(),{dataCard:s}=E(),d=q({name:v().required(),phone:v().required(),email:v().required(),recaptcha:$().required()}).required(),{register:c,handleSubmit:u,reset:H,setValue:L,formState:{errors:b}}=_({resolver:ne(d)}),T=x=>{H()};l.exports.useEffect(()=>{const x=()=>{const f=window.innerWidth;t(f)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),l.exports.useEffect(()=>{c("recaptcha",{required:!0})});const O=()=>{r(!a)},P=()=>{L("recaptcha",!0)},y=n>1024&&s!==null;return i("main",{children:[i(Oe,{children:[e(S,{src:z,srcSetDesktop:Ee,srcSetMobile:z}),i("div",{className:"ImgContents",children:[e("h1",{children:"Conforto e qualidade para levar bem-estar com alto padr\xE3o de atendimento a seus funcion\xE1rios."}),e("hr",{}),e("span",{className:"planGoldHeader",children:"Conhe\xE7a o plano Ouro da Porto Seguro Sa\xFAde."}),i("div",{className:"valueSection",children:[i("div",{className:"ContentValue",children:[e("span",{children:"A partir de"}),e("span",{className:"currency",children:"R$"}),e("span",{className:"value",children:"255"}),e("span",{className:"currency",children:",65*"})]}),e(fe,{color:"#F7B53D",children:"Ver Mais"})]}),e("span",{className:"valueRefer",children:"*Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 \xE0 9 vidas, com 20% de copart. com faixa et\xE1ria entre 0 e 18 anos. Sem IOF. Promo\xE7\xE3o v\xE1lida at\xE9 30 de abril de 2021."})]})]}),i(ye,{id:"hospitais",children:[e(C,{children:"Hospitais em destaque"}),e("p",{children:"Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro disp\xF5e para sua empresa as redes mais referenciadas com diversos benef\xEDcios para que voc\xEA tenha um atendimento totalmente personalizado."}),e("div",{className:"cardsContainer",children:o==null?void 0:o.map((x,f)=>f<3&&e(ke,{values:x},x.id))}),y&&e(J,{active:y})]}),i(Be,{id:"beneficios",children:[e(C,{children:"Benef\xEDcios do Plano"}),i("div",{className:"cardsContainer",children:[i(je,{children:[e("img",{src:Ze}),i("div",{className:"cardContainer",children:[e("h3",{children:"Rede Referenciada"}),i("p",{children:["Com o plano Ouro da Porto Seguro Sa\xFAde, voc\xEA conta com uma"," ",e("span",{className:"bold",children:"rede referenciada"})," de hospitais com toda a comodidade que voc\xEA e seus funcion\xE1rios precisam."]}),e(Z,{onClick:O,color:"#9A6D0C",children:e(M,{children:"Veja a lista completa de hospitais"})})]})]}),i(Ue,{children:[e("img",{src:Fe}),i("div",{className:"cardContainer",children:[e("h3",{children:"Reembolso de consultas e exames simples"}),i("p",{children:["Com o plano Ouro, receba o"," ",e("span",{className:"bold",children:"reembolso de seus exames e consultas"})," ","em at\xE9 48 horas \xFAteis, a partir da data de entrega de todos os documentos necess\xE1rios."]}),i("p",{style:{alignSelf:"flex-start",marginBottom:"0"},children:["Plano Ouro Max: ",e("span",{className:"bold",children:"R$280,00"})]})]})]})]})]}),i(Le,{open:a,setClose:O,children:[e("h2",{children:"Hospitais de refer\xEAncia"}),i("ul",{children:[i("li",{className:"provincy",children:[e("span",{className:"bold",children:"Rio de Janeiro"}),i("ul",{children:[e("li",{children:"-Copa D\u2019or"}),e("li",{children:"-Quinta D\u2019or"}),e("li",{children:"-Barra D\u2019or"}),e("li",{children:"-Casa de Sa\xFAde S\xE3o Jose (Humait\xE1)"}),e("li",{children:"-Cl\xEDnica S\xE3o Vicente da G\xE1vea"}),e("li",{children:"-Hospital Vit\xF3ria (Barra)"}),e("li",{children:"-Perinatal Laranjeiras"}),e("li",{children:"-Perinatal Barra"})]})]}),i("li",{className:"provincy",children:[e("span",{className:"bold",children:"S\xE3o Paulo"}),i("ul",{children:[e("li",{children:"-Hospital Alem\xE3o Oswaldo Cruz"}),e("li",{children:"-Hospital 9 de Julho"}),e("li",{children:"-Hospital S\xE3o Luiz \u2013 An\xE1lia Franco / Itaim /Morumbi / S.C. Sul"})]})]})]})]}),i(Ne,{id:"contato",children:[e(C,{children:"Quer Saber mais?"}),i("div",{className:"KnowMoreContent1",children:[e("img",{src:Qe,alt:"Telefone Ligando"}),e("p",{children:"Ainda sobrou alguma d\xFAvida sobre qual o melhor Plano para sua empresa? Envie seus dados e deixe que a NS Benef\xEDcios entrar\xE1 em contato assim que poss\xEDvel."})]}),i("div",{className:"KnowMoreContent2",children:[e("div",{className:"FormDiv",children:i("form",{method:"POST",onSubmit:u(T),children:[i("label",{children:["Nome:",e("input",h(m({type:"text"},c("name")),{name:"name",placeholder:"Seu nome"})),b.name&&e("p",{style:{color:"red"},children:"Esse Campo \xE9 obrigat\xF3rio"})]}),i("label",{children:["Telefone:",e("input",h(m({},c("phone")),{type:"phone",name:"phone",placeholder:"(COD) 99999-9999"})),b.phone&&e("p",{style:{color:"red"},children:"Esse Campo \xE9 obrigat\xF3rio"})]}),i("label",{children:["E-mail:",e("input",h(m({},c("email")),{type:"email",name:"email",placeholder:"seuemail@email.com"})),b.email&&e("p",{style:{color:"red"},children:"Esse Campo \xE9 obrigat\xF3rio"})]}),i("div",{className:"recaptcha",children:[e(ee,{sitekey:"6LdiqfgeAAAAAAgeuSTWGGsGrqDtw3vKILA3jLpr",onChange:P}),b.recaptcha&&e("p",{style:{color:"red"},children:"Esse Campo \xE9 obrigat\xF3rio"})]}),e(we,{color:"#F7B53D",children:"Enviar Contato"})]})}),e(F,{})]})]})]})},Pe="https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/hospital",Xe=ie.create({baseURL:Pe});function Ve(){const{HandleChangeData:n}=k();return l.exports.useEffect(()=>{async function t(){let a=await Xe.get("").then(r=>r.data);n(a)}t()},[]),console.log(),i(M,{children:[e(Me,{}),e(Te,{})]})}function Ke(){return e(te,{children:e(ae,{children:e(oe,{path:"/",element:e(Ve,{})})})})}var qe=re`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        box-sizing: border-box;
    }

    body{
        height: 100vh;
        
    }

    a{
        text-decoration: none;
    }

    li{
        list-style: none;
    }

    button{
        border: none;
        box-sizing: border-box
    }

    .bold{
        font-weight: bold
    }
`;function $e(){return i(G.Fragment,{children:[e(qe,{}),e(pe,{children:e(de,{children:e(Ke,{})})})]})}se.render(e(G.StrictMode,{children:e($e,{})}),document.getElementById("root"));
