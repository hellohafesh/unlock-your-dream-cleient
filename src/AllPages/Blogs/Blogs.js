import React from 'react';
import Header from '../Share/Header/Header';
import Accordion from 'react-bootstrap/Accordion';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <h1>Blogs</h1>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>01 :  what is cors?</Accordion.Header>
                    <Accordion.Body>
                        Simply put, CORS is the mechanism that provides the ability to alter the behavior of this policy, enabling you to do things like hosting static contentand the backend API . This kind of request would be called a Cross-Origin request, as a resource from one subdomain is requesting a resource from another subdomain.
                        This is all controlled through preflight requests that exchange a set of HTTP request headers and corresponding response headers collectively referred to as "CORS Headers", each of these headers modifies a different element of the Same-Origin policy to loosen the limitations it imposes.
                        There's a lot of terrible advice out there (especially on popular forums) on how to set this up where the answers generally include some variant of brutally setting wildcard "*" response headers regardless of the request headers provided in the pre-flight request. This article attempts to dispel some of the common misconceptions about Cross-Origin Resource Sharing and provide useful advice on how to get things working correctly.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>02 : Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase is a set of tools offered by Google to build excellent scalable applications in the cloud. It is a powerful service that helps in building applications quickly without reinventing the components or modules. Services like analytics, authentication, databases, configuration, file storage, push messaging are provided by firebase thereby making it easy for the developers to focus on the user experience of the application.
                        Many times, we receive queries to develop the application using firebase, but then we do a complete analysis of the requirement and suggest them the correct solution. The overall objective of the blog is to advise people on when they can choose firebase for their app and when it’s not a good choice to use it.
                        <br />Implement authentication<br />
                        1. Password-based authentication<br />
                        2. Two-factor/multifactor authentication
                        <br />
                        3. Biometric authentication
                        <br />
                        4. Single sign-on
                        <br />
                        5. Token-based authentication
                        <br />
                        6. Certificate-based authentication
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>03 : How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.

                        The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.
                        The App component is the root component of the example app, it contains the outer html, main nav and routes for the application.

                        The /login route is public, and the home route (/) is protected by the private route component that uses Redux to check if the user is logged in.

                        The last route is a catch-all redirect route that redirects any unmatched paths to the home page.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>4 : What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Wikipedia defines Node.js as “a packaged compilation of Google’s V8 JavaScript engine, the libuv platform abstraction layer, and a core library, which is itself primarily written in JavaScript.”

                        The runtime uses Chrome V8 internally, which is the JavaScript execution engine, and it’s also written in C++. This adds additional use cases to Node.js’s repertoire, such as accessing internal system functionality (like networking).
                        Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time. To understand how this is different from other runtimes, we need to understand how multi-threaded concurrent clients are handled in languages like Java.

                        See how Kinsta stacks up against the competition.

                        Select your provider
                        Compare

                        In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;