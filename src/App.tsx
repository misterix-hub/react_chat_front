import { Fragment } from 'react/jsx-runtime'
import './App.css'

function App() {

    return (
        <Fragment>
            <div className="messages-body">
                <h1>Mes messages</h1>
                <br /><br />

                <div className="messages-content">
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td width="50%">
                                    <div className="sender"></div>
                                </td>
                                <td>
                                    <div className="receiver"></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="message-form">
                    <input type="text" placeholder="Saisir un message" />
                    <button>
                        Envoyer
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default App
