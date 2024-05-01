"use strict";
{
    // ternary operator
    const age = 16;
    const isAdult = age >= 18 ? "adult" : "not adult";
    /* ============================== */
    // nullish coalescing operator
    // this operator will be used if only we have to make any decision based on 'null' and 'undefined'
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest"; // this operator only works based on null of undefined
    /* ============================== */
}
