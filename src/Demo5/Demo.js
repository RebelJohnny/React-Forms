import React from 'react'
import swal from 'sweetalert';

export const Demo = () => {
    const ShowMessage =()=>{
        swal("  گروه خودرو سازی فاوا");
    }
    const ShowMessage1 =()=>{
        swal("خرید ماشین با موفقیت انجام شد", "روی این لینک کلیک کنید");
    }

    //"warning"
// "error"
// "success"
// "info"
    const ShowMessage2 =()=>{
        swal("Good job!", "You clicked the button!", "info");
    }
    const ShowMessage3 =()=>{
        swal({
            title: "خرید با موفقیت انجام شد",
            text: "ماشین شما در اولین فرصت تحویل داده میشود",
            icon: "success",
            button: "باشه",
          });
    }

    const ShowMessage4 =()=>{
        swal({
            title: "خرید با موفقیت انجام شد",
            text: "ماشین شما در اولین فرصت تحویل داده میشود",
            icon: "error",
            button: {
                text: "OK",
                value: true,
                visible: true,
                className: "",
                closeModal: true
              },
          });
    }


    const ShowMessage5 =()=>{
        swal({
            title: "خرید با موفقیت انجام شد",
            text: "ماشین شما در اولین فرصت تحویل داده میشود",
            icon: "success",
            buttons: ["کنسل", "باشه"],
              
              
              
          });
    }


    const ShowMessage6 =()=>{
        swal({
            title: "ایا از انصراف خود مطمنید",
            text: "یکبار دیگه فکر کن",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("انصراف", {
                icon: "success",
              });
            } else {
              swal("ماشین شما در اولین فرصت تحویل داده میشود");
            }
          });
    }
    const ShowMessage7 =()=>{
        swal({
            buttons: {
              cancel: "cancell",
              confirm: "confirm",
            },
          });
    }

    return (
        <div>
            <button onClick={()=>ShowMessage()} >Priview</button>
            <button onClick={()=>ShowMessage1()} >Priview</button>
            <button onClick={()=>ShowMessage2()} >Priview</button>
            <button onClick={()=>ShowMessage3()} >Priview</button>
            <button onClick={()=>ShowMessage4()} >Priview</button>
            <button onClick={()=>ShowMessage5()} >Priview5</button>
            <button onClick={()=>ShowMessage6()} >Priview</button>
            <button onClick={()=>ShowMessage7()} >Priview</button>
        </div>
    )
}

//https://sweetalert.js.org/docs/

//https://formafzar.com/form/2nf1d