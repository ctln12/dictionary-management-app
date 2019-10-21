import React, { Component } from 'react';
import CreateNewDictionary from './CreateNewDictionary';
import Dictionaries from './Dictionaries';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newDictionaryName: '',
      newDomain: '',
      newRange: '',
      dictionaries: [],
      idCounter: []
    }
  }

  componentWillMount = () => {
    // set initial state with some data
    const data = [
      {
        id: 1,
        name: 'Color',
        content: [
          {
            id: 1,
            domain: 'Stonegrey',
            range: 'Dark Grey'
          },
          {
            id: 2,
            domain: 'Midnight Black',
            range: 'Black'
          }
        ]
      },
      {
        id: 2,
        name: 'Material',
        content: [
          {
            id: 1,
            domain: 'Stainless Steele',
            range: 'Chromium'
          }
        ]
      }
    ];
    const idCounter = [];
    for (let index = 3; index < 104; index++) {
       idCounter.push(index);
    }
    this.setState({
      dictionaries: data,
      idCounter: idCounter
    });
    console.log('Add data to state');
  }

  componentDidMount = () => {
    // verify if stored data
    const dictionaries = localStorage.getItem('dictionaries');
    if (dictionaries) {
      const savedDictionaries = JSON.parse(dictionaries);
      this.setState({ dictionaries: savedDictionaries });
      console.log('Dictionaries availables');
    } else {
      console.log('No dictionaries');
    }
  }

  setUniqueId = () => {
    const newId = this.state.idCounter.shift();
    const newIdCounter = this.state.idCounter.slice(0);
    this.setState({idCounter: newIdCounter});
    return newId;
  };

  updateDictionary(key, value) {
    // update react state (if use of localStorage)
    this.setState({
      [key]: value
    })
  }

  addDictionary = async (newDictionaryName) => {
    // copy of current list of dictionaries
    const dictionaries = [...this.state.dictionaries];

    // create item with unique id
    const newDictionary = {
      // id: 1 + dictionaries.length,
      id: this.setUniqueId(),
      name: newDictionaryName.slice(),
      content: []
    };

    //add new item to dictionaries
    dictionaries.push(newDictionary);

    //update state with new dictionaries and reset newDictionaryName input
    await this.setState({
      dictionaries,
      newDictionaryName: ''
    });

    localStorage.setItem('dictionaries', JSON.stringify(this.state.dictionaries));
    console.log(localStorage.getItem('dictionaries'));
  }

  deleteDictionary = async (id) => {
    // copy current list of dictionaries
    const dictionaries = [...this.state.dictionaries];

    // filter out item being deleted
    const updatedDictionaries = dictionaries.filter(dictionary => dictionary.id !== id);

    await this.setState({dictionaries: updatedDictionaries});

    localStorage.setItem('dictionaries', JSON.stringify(this.state.dictionaries));
    console.log(localStorage.getItem('dictionaries'));
  }

  updateInput(key, value, name) {
    // update react state (if use of localStorage)
    this.setState({
      [key]: value
    })

    const dictionaries = this.state.dictionaries;
    dictionaries.forEach(dictionary => {
      if (dictionary.name === name) {
        dictionary.content.forEach(row => {
          if (key === 'newDomain') {
            if (value === row.domain) {
              if (value !== row.range) {
                alert('Duplicate / Fork!');
                value = '';
              }
            }
          } else {
            if (key === 'newRange') {
              if (!row.range.includes(value)) {
                if (this.state.newDomain === row.range) {
                  alert('Cycle / Chain!');
                  value = '';
                }
              }
            }
          }
          }
        );
      }
    });
  }

  addNewRow = async (dictionary, newDomain, newRange) => {
    console.log('new row added', dictionary);
    // copy of current list of dictionaries
    const content = dictionary.content;

    // create item with unique id
    const newRow = {
      id: this.setUniqueId(),
      domain: newDomain.slice(),
      range: newRange.slice()
    };

    //add new item to dictionaries
    content.push(newRow);

    //update state with new dictionaries and reset newDictionaryName input
    await this.setState({
      dictionaries: this.state.dictionaries,
      // newDomain: '',
      // newRange: ''
    });

    localStorage.setItem('dictionaries', JSON.stringify(this.state.dictionaries));
    console.log(localStorage.getItem('dictionaries'));
  }

  deleteRow = async (dictionary, rowId) => {
    // copy current list of dictionaries
    const content = dictionary.content;
    console.log(content);
    // filter out item being deleted
    const updatedContent = content.filter(row => row.id !== rowId);
    console.log(updatedContent);
    // console.log(dictionary);
    dictionary.content = updatedContent;

    await this.setState({ dictionaries: this.state.dictionaries});

    localStorage.setItem('dictionaries', JSON.stringify(this.state.dictionaries));
    console.log(localStorage.getItem('dictionaries'));
  }

  editRow = (dictionary, rowId) => {
    console.log(dictionary.name, 'row' , rowId, 'editable');
    const selector = `table.${dictionary.name} tbody tr`;
    const domain = document.querySelectorAll(selector)[rowId - 1].children[0].innerText;
    const range = document.querySelectorAll(selector)[rowId - 1].children[1].innerText;
    console.log(domain, range);
    const selectorInput = `div#${dictionary.name} input`;
    document.querySelectorAll(selectorInput)[0].value = domain;
    this.updateInput('newDomain', domain);
    document.querySelectorAll(selectorInput)[1].value = range;
    this.updateInput('newRange', range);
    const selectorButton = `div#${dictionary.name} button`;
    document.querySelector(selectorButton).innerText = 'edit content';
    // console.log(domainInput, rangeInput);
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>App</h1>
          <CreateNewDictionary
            newDictionaryName={this.state.newDictionaryName}
            addDictionaryFn={this.addDictionary}
          />
          <Dictionaries
            dictionaries={this.state.dictionaries}
            deleteDictionaryFn={this.deleteDictionary}
            addNewRowFn={this.addNewRow}
          />
          <div className='Dictionaries'>
            {this.state.dictionaries.map(dictionary => {
              return (
                <div key={dictionary.id} className='Dictionary'>
                  <h3 key={dictionary.id}>
                    {dictionary.name}
                    <button
                      onClick={() => this.deleteDictionary(dictionary.id)}
                    >
                      x
                    </button>
                  </h3>
                  <div id={dictionary.name} className='NewEntry'>
                    <p>Add new entry:</p>
                    <input
                      type='text'
                      placeholder='domain'
                      name={dictionary.name}
                      value={this.state.newDomain}
                      onChange={e => this.updateInput('newDomain', e.target.value, e.target.name)}
                    />
                    <input
                      type='text'
                      placeholder='range'
                      name={dictionary.name}
                      value={this.state.newRange}
                      onChange={e => this.updateInput('newRange', e.target.value, e.target.name)}
                    />
                    <button onClick={() => this.addNewRow(dictionary)}>add new content</button>
                  </div>
                  <table className={dictionary.name}>
                    <thead>
                      <tr>
                        <th>Domain</th>
                        <th>Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dictionary.content.map(row => {
                        return (
                          <tr key={row.id} id={row.id}>
                            <td>{row.domain}</td>
                            <td>{row.range}</td>
                            <td>
                              <button
                                onClick={() => this.deleteRow(dictionary, row.id)}
                              >
                                x
                              </button>
                            </td>
                            <td>
                              <button
                                onClick={() => this.editRow(dictionary, row.id)}
                              >
                                edit
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
