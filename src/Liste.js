var React = require('react');
var cross = require ('./cross.png');
var Liste = React.createClass({


render : function (){

return (
  <div className='Liste'>
    <ul>
      <li>
      This is an element yay
      <img src={cross} className='Cross' alt="cross"/>
      </li>

    </ul>
  </div>

  );

}


});

export default Liste;
