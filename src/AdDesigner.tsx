import "./AdDesigner.css"
import { useState } from "react";


function AdDesigner() {

        const [flavor, setFlavor] = useState<string>('Chocolate');
        const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
        const [fontSize, setFontSize] = useState<number>(24); 
        return (
          <div className="AdDesigner">
              <p>Ad Designer</p>
            <div className={`Ad ${isDarkTheme ? 'dark' : 'light'}`} style={{ fontSize: `${fontSize}px` }}>
              Vote For {flavor}
            </div>
            <p>WHAT TO SUPPORT</p>
            <div className="buttons">
              {['Chocolate', 'Vanilla', 'Strawberry'].map((flav) => (
                <button
                  key={flav}
                  disabled={flavor === flav}
                  onClick={() => setFlavor(flav)}
                >
                  {flav}
                </button>
              ))}
            </div>
            <p>THEME</p>
            <div className="theme-buttons">
              <button
                disabled={!isDarkTheme}
                onClick={() => setIsDarkTheme(false)}
              >
                Light
              </button>
              <button
                disabled={isDarkTheme}
                onClick={() => setIsDarkTheme(true)}
              >
                Dark
              </button>
            </div>
            <p>FONT SIZE</p>
            <div className="font-size">
              <button onClick={() => setFontSize(fontSize - 2)}>Down</button>
              {fontSize}
              <button onClick={() => setFontSize(fontSize + 2)}>Up</button>
            </div>
          </div>
        );
      };
//     // const [flavor, setFlavor] = useState<boolean>({
//     //     Chocolate: false,
//     //     Vanilla: false,
//     //     Strawberry: false
//     // });

//     const [flavor, setFlavor] = useState<string>('Chocolate');

//     const [darkTheme, setDarkTheme] = useState<boolean>(false);

//     const [fontSize, setFontSize] = useState<number>(12);

//     return (
//     <div className="ad-designer">
//         <p className="section-title">Ad Designer</p>
//         <div className="ad-display">
//             Vote For
//         </div>
//                 <p className="support-title">What to Support</p>
//                 <div className="flavor-buttons">
//                     {['Chocolate', 'Vanilla', 'Strawberry'].map((flavor) => (
//                         <button key={flavor} disabled={flavor === flavor} onClick={()=>setFlavor(flavor)}></button>
//                     ))};
//                 </div>
//             <div className="color-theme">
//                 <p className="theme-title">Color Theme</p>
//                 <button disabled={!isDarkTheme} onClick={() => setDarkTheme(false)}>Light</button>
//                 <button disabled={!isDarkTheme} onClick={() => setDarkTheme(true)}>Dark</button>
//             </div>
//             <div className="font-size">
//                 <p className="font-title">Font Size</p>
//                 <div className="counter-buttons">
//                     <div className="counter">
//                         <button onClick={()=> setFontSize(fontSize - 2)}>Down</button>
//                         {fontSize}
//                         <button onClick={()=> setFontSize(fontSize + 2)}>Up</button>
//                         {/* <button className="font-change">Down</button>
//                         <div className="font-display">{fontSize}</div>
//                         <button className="font-change">Up</button> */}
//                     </div>
//                 </div>
//             </div>
//     </div>
// )


export default AdDesigner;