import React from 'react';

function productDetails({product}) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="brd col-md-4" style={{height: '30vw'}}>
                        <img src="../img/t-shirt.png" style={{height: '100%', width: '100%'}}/>
                    </div>
                    <div className="col-md-6">
                        <span className="info"><b>Name:</b> Name</span><br/>
                        <span className="info"><b>Category:</b> category</span><br/>
                        <span className="info"><b>Condition:</b> condition</span><br/>
                        <span className="info"><b>Size:</b> size</span><br/>
                        <span className="info"><b>Seller:</b> seller</span><br/>
                        <b>Price: price</b>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum eleifend finibus. Curabitur vestibulum risus id cursus laoreet. Phasellus bibendum luctus sodales. Morbi eu dui nec arcu venenatis cursus. Quisque lacinia commodo pulvinar. Nunc euismod in risus vel auctor. Vestibulum lacinia purus vel efficitur congue. Nam vitae hendrerit metus. Aenean sollicitudin ultrices ex venenatis bibendum.

                            Nunc fermentum lacinia magna, id ultricies mauris sagittis eu. Integer aliquet dapibus sapien, non volutpat leo facilisis sed. Vestibulum imperdiet eleifend interdum. Cras iaculis, urna ut sodales cursus, arcu magna accumsan ante, eu dapibus orci ligula eget nibh. Nullam maximus purus vel purus sodales, vitae luctus diam fringilla. Aenean dictum tincidunt urna nec euismod. Aenean scelerisque interdum mattis. Duis semper magna non turpis dapibus dapibus. Proin nec diam non sapien sagittis aliquam eget id lorem. Pellentesque non dolor dictum, euismod ipsum in, fermentum ex. Morbi id condimentum lectus. Maecenas et imperdiet purus, sit amet feugiat mauris. Curabitur pharetra nulla augue, in sodales felis sodales in. Praesent sodales orci a ante interdum vehicula. Vestibulum a aliquam nisi, id dictum felis.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum eleifend finibus. Curabitur vestibulum risus id cursus laoreet. Phasellus bibendum luctus sodales. Morbi eu dui nec arcu venenatis cursus. Quisque lacinia commodo pulvinar. Nunc euismod in risus
                        </p>
                    </div>
                </div>
                {/*<div className="row">
                    <div className="col-md-12">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum eleifend finibus. Curabitur vestibulum risus id cursus laoreet. Phasellus bibendum luctus sodales. Morbi eu dui nec arcu venenatis cursus. Quisque lacinia commodo pulvinar. Nunc euismod in risus vel auctor. Vestibulum lacinia purus vel efficitur congue. Nam vitae hendrerit metus. Aenean sollicitudin ultrices ex venenatis bibendum.

                            Nunc fermentum lacinia magna, id ultricies mauris sagittis eu. Integer aliquet dapibus sapien, non volutpat leo facilisis sed. Vestibulum imperdiet eleifend interdum. Cras iaculis, urna ut sodales cursus, arcu magna accumsan ante, eu dapibus orci ligula eget nibh. Nullam maximus purus vel purus sodales, vitae luctus diam fringilla. Aenean dictum tincidunt urna nec euismod. Aenean scelerisque interdum mattis. Duis semper magna non turpis dapibus dapibus. Proin nec diam non sapien sagittis aliquam eget id lorem. Pellentesque non dolor dictum, euismod ipsum in, fermentum ex. Morbi id condimentum lectus. Maecenas et imperdiet purus, sit amet feugiat mauris. Curabitur pharetra nulla augue, in sodales felis sodales in. Praesent sodales orci a ante interdum vehicula. Vestibulum a aliquam nisi, id dictum felis.
                        </p>
                    </div>
                </div>*/}
            </div>
        </React.Fragment>
    )
}

export default productDetails;