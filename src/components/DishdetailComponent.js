import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderDish({dish}) {
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
    function RenderComments(dish) {
        return dish.comments.map((comment) => {

            return (

                <div key={comment.id} >
                    <div className="comment">{comment.comment}</div>
                    <div className="auth-date"><strong className="author">-- {comment.author}</strong><span className="date">, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</span></div>
                    &nbsp;
                </div>

            )
        })
    }
    const DishDetail = (props) =>{
        if (props.dish) {
            const dish = props.dish;
            
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {/* {this.renderDish(this.props.dish)} */}
                            <RenderDish dish={dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <strong>Comments</strong>
                            <RenderComments comments={dish.comments} />
                        </div>
                    </div>
                </div>

            )
        } else {
            return (<div></div>);
        }
    }

export default DishDetail