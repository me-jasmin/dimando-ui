import React from 'react';

const Typography = () => {
    return (
        <div className="sb-unstyled">
            <h1>HTML Ipsum Presents</h1>

            <p>
                <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
                ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
                Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
                lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
            </p>

            <h2>Header Level 2</h2>

            <ol>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
            </ol>

            <blockquote>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend,
                    libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.
                </p>
            </blockquote>

            <h3>Header Level 3</h3>

            <ul>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>

            <pre>
                <code>
                    {`#header h1 a {
    display: block;
    width: 300px;
    height: 80px;
}`}
                </code>
            </pre>
            <h1>What to expect from here on out</h1>
            <p>Until now, trying to style an article, document, or blog post with Tailwind has been a tedious task that required a keen eye for typography and a lot of complex custom CSS.</p>
            <p>
                By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you
                spend less time undoing user-agent styles, but when you <em>really are</em> just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be
                surprising and unintuitive.
            </p>
            <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
            <blockquote>
                <p>
                    Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable this? What do you mean I lose all the other base styles too?
                </p>
            </blockquote>
            <p>
                The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you <em>actually</em> want, without any of the downsides of doing something stupid like disabling our
                base styles.
            </p>
            <p>
                It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:
            </p>
            <hr />
            <h2>What to expect from here on out</h2>
            <p>
                What follows from here is just a bunch of absolute nonsense Ive written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like{}
                <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes, <em>and even italics</em>.
            </p>
            <p>Its important to cover all of these use cases for a few reasons:</p>
            <ol>
                <li>We want everything to look good out of the box.</li>
                <li>Really just the first reason, thats the whole point of the plugin.</li>
                <li>Heres a third pretend reason though a list with three items looks more realistic than a list with two items.</li>
            </ol>
            <p>Now were going to try out another header style.</p>
            <h3>Typography should be easy</h3>
            <p>So thats a header for you — with any luck if weve done our job correctly that will look pretty reasonable.</p>
            <p>Something a wise person once told me about typography is:</p>
            <blockquote>
                <p>Typography is pretty important if you dont want your stuff to look like trash. Make it good then it wont be bad.</p>
            </blockquote>
            <p>Its probably important that images look okay here by default as well:</p>
            <figure>
                <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="" />
                <figcaption>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </figcaption>
            </figure>
            <p>Now Im going to show you an example of an unordered list to make sure that looks good, too:</p>
            <ul>
                <li>So here is the first item in this list.</li>
                <li>In this example were keeping the items short.</li>
                <li>Later, well use longer, more complex list items.</li>
            </ul>
            <p>And thats the end of this section.</p>
            <h2>What if we stack headings?</h2>
            <h3>We should make sure that looks good, too.</h3>
            <p>
                Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings
                to be closer together than a paragraph followed by a heading should be.
            </p>
            <h3>When a heading comes after a paragraph …</h3>
            <p>When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now lets see what a more complex list would look like.</p>
            <ul>
                <li>
                    <p>
                        <strong>I often do this thing where list items have headings.</strong>
                    </p>
                    <p>For some reason I think this looks cool which is unfortunate because its pretty annoying to get the styles right.</p>
                    <p>
                        I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all
                        make sense. Pretty tough honestly, you could make a strong argument that you just shouldnt write this way.
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Since this is a list, I need at least two items.</strong>
                    </p>
                    <p>
                        I explained what Im doing already in the previous list item, but a list wouldnt be a list if it only had one item, and we really want this to look realistic. Thats why Ive
                        added this second list item so I actually have something to look at when writing the styles.
                    </p>
                </li>
                <li>
                    <p>
                        <strong>Its not a bad idea to add a third item either.</strong>
                    </p>
                    <p>
                        I think it probably wouldve been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I
                        might as well include it.
                    </p>
                </li>
            </ul>
            <p>After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading.</p>
            <h2>Code should look okay by default.</h2>
        </div>
    );
};

export default Typography;
