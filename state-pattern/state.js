var Order = /** @class */ (function () {
    function Order() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.orderBeingProcesedState = new OrderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.setState(this.paymentPendingState);
    }
    Order.prototype.setState = function (state) {
        this.currentState = state;
    };
    Order.prototype.getState = function () {
        return this.currentState;
    };
    return Order;
}());
var PaymentPendingState = /** @class */ (function () {
    function PaymentPendingState(order) {
        this.order = order;
    }
    PaymentPendingState.prototype.cancelOrder = function () {
        console.log('Cancelling the unpaid order...');
        this.order.setState(this.order.cancelledOrderState);
    };
    PaymentPendingState.prototype.verifyPayments = function () {
        console.log('The payment is verified: Shipper soon...');
        this.order.setState(this.order.orderBeingProcesedState);
    };
    PaymentPendingState.prototype.shipOrder = function () {
        console.log('Cannot ship the order when payment is pending...');
    };
    return PaymentPendingState;
}());
var CancelledOrderState = /** @class */ (function () {
    function CancelledOrderState(order) {
        this.order = order;
    }
    CancelledOrderState.prototype.cancelOrder = function () {
        console.log('Your order has already cancelled...');
    };
    CancelledOrderState.prototype.verifyPayments = function () {
        console.log('Your order has already cancelled, you can not verify the payment...');
    };
    CancelledOrderState.prototype.shipOrder = function () {
        console.log('Your order has already cancelled, order can not shipped...');
    };
    return CancelledOrderState;
}());
var OrderBeingPreparedState = /** @class */ (function () {
    function OrderBeingPreparedState(order) {
        this.order = order;
    }
    OrderBeingPreparedState.prototype.cancelOrder = function () {
        console.log('Cancelling the unpaid order...');
        this.order.setState(this.order.cancelledOrderState);
    };
    OrderBeingPreparedState.prototype.verifyPayments = function () {
        console.log('Already verified your payment...');
    };
    OrderBeingPreparedState.prototype.shipOrder = function () {
        console.log('Shipping your order now...');
        this.order.setState(this.order.orderShippedState);
    };
    return OrderBeingPreparedState;
}());
var OrderShippedState = /** @class */ (function () {
    function OrderShippedState(order) {
        this.order = order;
    }
    OrderShippedState.prototype.cancelOrder = function () {
        console.log('You cannot cancel already ship...');
    };
    OrderShippedState.prototype.verifyPayments = function () {
        console.log('You cannot verify already ship...');
    };
    OrderShippedState.prototype.shipOrder = function () {
        console.log('Order already shipped...');
    };
    return OrderShippedState;
}());
var order = new Order();
console.log('The order state:' + order.getState().constructor.name);
//It's not possible so the name is the same and the message error it's displayed
order.getState().shipOrder();
console.log('The order state:' + order.getState().constructor.name);
order.getState().verifyPayments();
console.log('The order state:' + order.getState().constructor.name);
//Now it's possible to ship order because the status change before
order.getState().shipOrder();
console.log('The order state:' + order.getState().constructor.name);
//It's not possible to cancel de the order at this point because it's being shipped
order.getState().cancelOrder();
console.log('The order state:' + order.getState().constructor.name);
