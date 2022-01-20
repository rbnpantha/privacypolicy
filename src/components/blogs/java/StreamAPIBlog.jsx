import React, { Component } from "react";
//import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import BlogSideBarRight from "../BlogSideBarRight";

class StreamAPIBlog extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <div className="col-6 col-md-2 clo-xl-2 bd-sidebar mb-2 m4">
            <div></div>
            <img
              src="https://homepages.cae.wisc.edu/~ece533/images/boat.png"
              class="rounded-circle w-50 p-2 m-4"
              alt="Cinque Terre"
            />
            <div></div>
            <a href="https://www.linkedin.com/in/rabinpantha">
              Er. Rabin Pantha
            </a>
            <div>Globallogic Inc.</div>
          </div>
          <main
            className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content"
            role="main"
          >
            <div className="col-xs-12">
              <h2 className="m-5">Where does it come from?</h2>
              <p className="text-left lead text-justify text-break">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the <mark>highlight</mark>{" "}
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
              <var>y</var> = <var>m</var>
              <var>x</var> + <var>b</var>
              <div></div>
              <samp>
                This text is meant to be treated as sample output from a
                computer program.
              </samp>
              <p className="text-left lead text-justify text-break">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
              <pre>
                <code>
                  &lt;p&gt;Sample text here...&lt;/p&gt; &lt;p&gt;And another
                  line of sample text here...&lt;/p&gt;
                </code>
              </pre>
              <p className="text-left lead text-justify text-break">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="text-left lead text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages.
              </p>
            </div>
          </main>
          <div className="col-6 col-md-2 clo-xl-2 mb-2 border-left">
            <BlogSideBarRight />
          </div>
        </div>
      </div>
    );
  }
}

export default StreamAPIBlog;
