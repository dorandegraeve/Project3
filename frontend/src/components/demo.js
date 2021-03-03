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

        addToMailchimp(this.state.email, this.state, 'https://howest.us20.list-manage.com/subscribe/post?u=f080a4f54ee3661e4a8efddae&amp;id=9d882d82ec')
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
            <div className="demo__volledig">
                <div>
                    <form className="demo__form" onSubmit={this._handleSubmit}>
                        <input
                            className="demo__field"
                            type="email"
                            onChange={this._handleChange}
                            placeholder="Jouw e mailadres"
                            name="email"
                            style={{
                                paddingLeft: "3.2rem",
                                fontSize: "2rem",
                                color: "#98A3BD" ,
                            }}
                        />
                        <input className ="button button--demo" type="submit" value="Verstuur code"/>
                    </form>
                </div>
            </div>
        )
    }
}