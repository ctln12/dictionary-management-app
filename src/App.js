import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newDictionaryName: '',
      newDomain: '',
      newRange: '',
      dictionaries: [],
    }
  }

  componentDidMount = () => {
    const data = [
      {
        id: 1,
        name: 'Cactus',
        content: [
          {
            id: 1,
            domain: 'Opuntia',
            range: 'round'
          },
          {
            id: 2,
            domain: 'Column',
            range: 'long'
          }
        ]
      },
      {
        id: 2,
        name: 'Flowers',
        content: [
          {
            id: 1,
            domain: 'Orchid',
            range: 'white'
          }
        ]
      }
    ];
    const dictionaries = localStorage.getItem('dictionaries');
    if (dictionaries) {
      const savedDictionaries = JSON.parse(dictionaries);
      this.setState({ dictionaries: savedDictionaries });
    } else {
      console.log('No dictionaries');
    }
  }

  updateDictionary(key, value) {
    // update react state (if use of localStorage)
    this.setState({
      [key]: value
    })
  }

  addDictionary = async () => {
    // copy of current list of dictionaries
    const dictionaries = [...this.state.dictionaries];

    // create item with unique id
    const newDictionaryName = {
      id: 1 + dictionaries.length,
      name: this.state.newDictionaryName.slice(),
      content: []
      // content: [{ id: 1 + Math.random(), domain: this.state.newDomain.slice(), range: this.state.newRange.slice()}]
    };

    //add new item to dictionaries
    dictionaries.push(newDictionaryName);

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

  updateInput(key, value) {
    // update react state (if use of localStorage)
    this.setState({
      [key]: value
    })
  }

  addNewRow = async (dictionary) => {
    // copy of current list of dictionaries
    const content = dictionary.content;

    // create item with unique id
    const newContent = {
      id: 1 + content.length,
      domain: this.state.newDomain.slice(),
      range: this.state.newRange.slice()
    };

    //add new item to dictionaries
    dictionary.content.push(newContent);

    //update state with new dictionaries and reset newDictionaryName input
    await this.setState({
      dictionaries: this.state.dictionaries,
      // content,
      newDomain: '',
      newRange: ''
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
          <p>Create a new dictionary:</p>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={this.state.newDictionaryName}
            onChange={e => this.updateDictionary('newDictionaryName', e.target.value)}
          />
          <button
          onClick={() => this.addDictionary()}
          >
            add
          </button>
          <hr/>
          <div className='Dictionaries'>
            <h2>Dictionaries</h2>
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
                      onChange={e => this.updateInput('newDomain', e.target.value)}
                    />
                    <input
                      type='text'
                      placeholder='range'
                      name={dictionary.name}
                      value={this.state.newRange}
                      onChange={e => this.updateInput('newRange', e.target.value)}
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
