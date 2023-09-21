
// const Content = () => {
//   return (
//     <>
//     <div className="grid  grid-rows-3 h-auto  gap-2">
//         <div className="flex  gap-2 ">
//       <div className="bg-slate-100"><p>statictics</p></div>
//       <div className="grow bg-slate-100 flex-col py-2">
//         <p className="mb-1">Attendance</p>
//         <div className="flex justify-between gap-1 mx-2">
//         <div className="bg-white">lorem</div>
//         <div className="bg-white">lorem</div>
//         <div className="bg-white">lorem</div>
//         <div className="bg-white">lorem</div>
//         <div className="bg-white">lorem</div>
//         <div className="bg-white">lorem</div>
//         </div>
//         </div>
//         </div>
//         <div className="bg-slate-100">
// flex basis-1/3 ke teen
//         </div>
//         <div className="bg-slate-100">
// isme do ...try kro ...and search krna fir ki isko pura grid se kesse, nd vansh ka dekh ke flex se kese hua dekhlena
//         </div>
//     </div>
//     </>
//   )
// }

// export default Content


const Content = () => {
  return (
    <div className="flex-grow flex flex-col justify-between gap-3 h-full ">
      <div className="flex-grow bg-slate-300 rounded-3xl p-3">
        <span>ok</span>
      </div>
      <div className="flex-grow basis-1/3 bg-slate-300 rounded-3xl p-3">
       <span>ok</span>
      </div>
      <div className="flex-grow bg-slate-300 rounded-3xl p-3">
        <span>ok</span>
      </div>
    </div>
  );
}

export default Content;
