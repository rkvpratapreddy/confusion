import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    rednderDish(dish) {
        if(dish != null) {

            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText>{ dish.description }</CardText>
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
        if (this.props.dish) {
        const dish = this.props.dish;
        const comment =  dish.comments.map((comment) => {
    
            return (
                <div key={comment.id} >
                    <div className="comment">{ comment.comment }</div>   
                    <div className="auth-date"><strong className="author">-- {comment.author}</strong><span className="date">, {comment.date}</span></div>
                    &nbsp;
                </div>
            )
        })
        return (
           
            <div className="row">
                <div class="col-12 col-md-5 m-1">
                    { this.rednderDish(this.props.dish) }
                </div>
                <div class="col-12 col-md-5 m-1">
                    <strong>Comments</strong>
                    { comment }
                </div>
            </div>
            
        )
    } else {
        return (<div></div>);
    }
    }
}
export default DishDetail