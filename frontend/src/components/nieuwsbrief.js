import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class IndexPage extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }

    render() {
        return (
            <div className="nieuwsbrief__volledig">
                <h1 className="nieuwsbrief nieuwsbrief__titel">Mis nooit een update</h1>
                <p className="nieuwsbrief nieuwsbrief__tekst">Schrijf je in voor de Bloom nieuwsbrief</p>
                <div>
                    <form className="nieuwsbrief__formulier" onSubmit={this._handleSubmit}>
                        <input
                            className="nieuwsbrief__field"
                            type="email"
                            onChange={this._handleChange}
                            placeholder="Jouw e mailadres"
                            name="email"
                            id="email"
                            style={{
                                paddingLeft: "3.2rem",
                                fontSize: "2rem",
                                color: "#98A3BD" ,
                            }}
                        />
                        <br />
                        <br />
                        <input className ="button button--nieuwsbrief" type="submit" value=""/>
                    </form>
                </div>
            </div>
        )
    }
}