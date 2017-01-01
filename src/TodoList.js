var React=require('react');

/* List elements */
var TodoElements = React.createClass({
  render : function(){

    /* Get item list */
    var itemsEntries = this.props.entries;
    var remove = this.props.remove;

    function createTasks(item) {
      return <li key={item.key} onClick={remove}>{item.text}</li>
    }

    /* Stock list of <li>*/
    var listItems = itemsEntries.map(createTasks);
    return (
      <ul className='List'>
      {listItems}
      </ul>
    );
  }
});

/* List container */
var TodoList=React.createClass({
  /* Task list & temporary input value typed */
  getInitialState: function(){
      return {items : [],
              inputValue : ''} ;
    },

  /* Update input value (state) while typing */
  updateInputValue : function(evt){
    this.setState({
       inputValue: evt.target.value
     });
  },

  /* Get item list, add input to local item list (with id), maj item list */
  addItem : function(e){
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this.state.inputValue,
        key : Date.now()
      }
    );

    this.setState({
      items : itemArray,
      inputValue :''
    });
  },

  removeItem : function(key){
  /*  var except = this.state.items.filter((item) => {if (item.key !== key) return item;});

     Maj item list state
    this.setState({items : except});*/
    this.state.items.splice(key, 1);

    this.setState({
      items : this.state.items

    });

  },

  /* Display */
  render: function () {
    return (
      <div  className='TodoList'>
        <div  className='TodoForm'>
          <form>
            <label>
              <input type="text" name="element" placeholder="Enter a new task" value={this.state.inputValue} onChange={this.updateInputValue}/>
            </label>
            <button type="button" onClick={this.addItem}> Add </button>
          </form>
          <TodoElements entries={this.state.items} remove={this.removeItem}/>
        </div>
      </div>
    );
  }


});

export default TodoList;
