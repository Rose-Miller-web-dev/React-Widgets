import React from "react"
import { BrowserRouter } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

export default function OnePage() {
    return(
        <BrowserRouter>
            <div className="container">

                <ol className="list-group">
                    <li className="list-group-item">
                        <Link to='#firstSec'>First</Link>
                    </li>

                    <li className="list-group-item">
                        <Link to='#secondSec'>Second</Link>
                    </li>

                    <li className="list-group-item">
                        <Link to='#thirdSec'>Third</Link>
                    </li>
                </ol>

                <section id="firstSec">
                    <h1>First Section</h1>
                    <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat nunc, auctor vel felis eget, varius commodo felis. Duis purus augue, condimentum non venenatis et, hendrerit ac urna. Etiam semper quam augue, eu elementum lacus dignissim sed. Quisque ac lacinia quam. Curabitur pellentesque nisi tortor, quis mollis risus finibus vel. Vivamus neque diam, laoreet at nisl eget, ornare tincidunt leo. In luctus consectetur velit, ac sodales augue auctor nec. Sed lobortis nulla ut ipsum cursus tincidunt. Pellentesque efficitur, ipsum at tempus ullamcorper, tellus mauris venenatis orci, et gravida elit tortor eu magna. Proin nec massa eu velit pharetra imperdiet quis vitae diam. Duis ut faucibus ipsum. Curabitur dapibus luctus ante eu convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non dignissim elit.
                    Vivamus rutrum ultricies ligula, id sagittis purus tristique id. Proin accumsan, nunc et semper dignissim, tellus est bibendum tortor, in consequat urna velit in enim. Nulla malesuada lorem est, vel porttitor quam consequat eget. Sed vehicula ex neque, quis hendrerit ligula consequat sit amet. Curabitur eu est vel neque tincidunt feugiat at ac est. Suspendisse hendrerit, nibh in placerat consequat, tellus magna facilisis elit, ut gravida dolor mauris sed elit. Pellentesque at nisi urna. Vestibulum eget sem eros. Nunc tellus diam, rhoncus sit amet risus quis, ornare cursus dui.
                    In porttitor vulputate nisi at faucibus. Praesent in enim quis nisi facilisis vulputate id ut turpis. Aenean facilisis euismod nisl eget vehicula. Vestibulum eu mauris faucibus nisi commodo faucibus eu efficitur quam. Etiam vitae pellentesque felis, vitae placerat justo. Mauris leo ante, facilisis in ipsum id, luctus consectetur neque. Fusce vel purus cursus, pulvinar eros vel, ultrices erat. Integer quis scelerisque erat. Phasellus commodo imperdiet volutpat. Fusce ultricies bibendum sapien, in ultricies diam lacinia id. Vivamus odio lectus, dapibus at mattis tempus, venenatis non sapien. Vivamus eget vestibulum urna, eu laoreet urna.
                    </p>
                </section>

                <section id="secondSec">
                    <h1>Second Section</h1>
                    <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat nunc, auctor vel felis eget, varius commodo felis. Duis purus augue, condimentum non venenatis et, hendrerit ac urna. Etiam semper quam augue, eu elementum lacus dignissim sed. Quisque ac lacinia quam. Curabitur pellentesque nisi tortor, quis mollis risus finibus vel. Vivamus neque diam, laoreet at nisl eget, ornare tincidunt leo. In luctus consectetur velit, ac sodales augue auctor nec. Sed lobortis nulla ut ipsum cursus tincidunt. Pellentesque efficitur, ipsum at tempus ullamcorper, tellus mauris venenatis orci, et gravida elit tortor eu magna. Proin nec massa eu velit pharetra imperdiet quis vitae diam. Duis ut faucibus ipsum. Curabitur dapibus luctus ante eu convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non dignissim elit.
                    Vivamus rutrum ultricies ligula, id sagittis purus tristique id. Proin accumsan, nunc et semper dignissim, tellus est bibendum tortor, in consequat urna velit in enim. Nulla malesuada lorem est, vel porttitor quam consequat eget. Sed vehicula ex neque, quis hendrerit ligula consequat sit amet. Curabitur eu est vel neque tincidunt feugiat at ac est. Suspendisse hendrerit, nibh in placerat consequat, tellus magna facilisis elit, ut gravida dolor mauris sed elit. Pellentesque at nisi urna. Vestibulum eget sem eros. Nunc tellus diam, rhoncus sit amet risus quis, ornare cursus dui.
                    In porttitor vulputate nisi at faucibus. Praesent in enim quis nisi facilisis vulputate id ut turpis. Aenean facilisis euismod nisl eget vehicula. Vestibulum eu mauris faucibus nisi commodo faucibus eu efficitur quam. Etiam vitae pellentesque felis, vitae placerat justo. Mauris leo ante, facilisis in ipsum id, luctus consectetur neque. Fusce vel purus cursus, pulvinar eros vel, ultrices erat. Integer quis scelerisque erat. Phasellus commodo imperdiet volutpat. Fusce ultricies bibendum sapien, in ultricies diam lacinia id. Vivamus odio lectus, dapibus at mattis tempus, venenatis non sapien. Vivamus eget vestibulum urna, eu laoreet urna.
                    </p>
                </section>

                <section id="thirdSec">
                    <h1>Third Section</h1>
                    <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat nunc, auctor vel felis eget, varius commodo felis. Duis purus augue, condimentum non venenatis et, hendrerit ac urna. Etiam semper quam augue, eu elementum lacus dignissim sed. Quisque ac lacinia quam. Curabitur pellentesque nisi tortor, quis mollis risus finibus vel. Vivamus neque diam, laoreet at nisl eget, ornare tincidunt leo. In luctus consectetur velit, ac sodales augue auctor nec. Sed lobortis nulla ut ipsum cursus tincidunt. Pellentesque efficitur, ipsum at tempus ullamcorper, tellus mauris venenatis orci, et gravida elit tortor eu magna. Proin nec massa eu velit pharetra imperdiet quis vitae diam. Duis ut faucibus ipsum. Curabitur dapibus luctus ante eu convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non dignissim elit.
                    Vivamus rutrum ultricies ligula, id sagittis purus tristique id. Proin accumsan, nunc et semper dignissim, tellus est bibendum tortor, in consequat urna velit in enim. Nulla malesuada lorem est, vel porttitor quam consequat eget. Sed vehicula ex neque, quis hendrerit ligula consequat sit amet. Curabitur eu est vel neque tincidunt feugiat at ac est. Suspendisse hendrerit, nibh in placerat consequat, tellus magna facilisis elit, ut gravida dolor mauris sed elit. Pellentesque at nisi urna. Vestibulum eget sem eros. Nunc tellus diam, rhoncus sit amet risus quis, ornare cursus dui.
                    In porttitor vulputate nisi at faucibus. Praesent in enim quis nisi facilisis vulputate id ut turpis. Aenean facilisis euismod nisl eget vehicula. Vestibulum eu mauris faucibus nisi commodo faucibus eu efficitur quam. Etiam vitae pellentesque felis, vitae placerat justo. Mauris leo ante, facilisis in ipsum id, luctus consectetur neque. Fusce vel purus cursus, pulvinar eros vel, ultrices erat. Integer quis scelerisque erat. Phasellus commodo imperdiet volutpat. Fusce ultricies bibendum sapien, in ultricies diam lacinia id. Vivamus odio lectus, dapibus at mattis tempus, venenatis non sapien. Vivamus eget vestibulum urna, eu laoreet urna.
                    </p>
                </section>
            </div>
        </BrowserRouter>
    )
}