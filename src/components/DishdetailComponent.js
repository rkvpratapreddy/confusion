import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount() {
        console.log("Dishdetailed Component componentDidMount is invoked");
    }
    componentDidUpdate() {
        console.log("Dishdetailed Component componentDidUpdate is invoked");
    }
    renderDish(dish) {
        if (dish != null) {

            return (
                <Card>
                    <CardImg width="100%" object={dish.toString()} src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    render() {
        console.log("Dishdetailed Component render invoked");
        if (this.props.dish) {
            const dish = this.props.dish;
            const comment = dish.comments.map((comment) => {

                return (

                    <div key={comment.id} >
                        <div className="comment">{comment.comment}</div>
                        <div className="auth-date"><strong className="author">-- {comment.author}</strong><span className="date">, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</span></div>
                        &nbsp;
                    </div>

                )
            })
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <strong>Comments</strong>
                            {comment}
                        </div>
                    </div>
                </div>

            )
        } else {
            return (<div></div>);
        }
    }
}
export default DishDetail