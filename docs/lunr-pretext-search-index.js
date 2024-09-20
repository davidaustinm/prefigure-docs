var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  Website   copyright  "
},
{
  "id": "sec-example",
  "level": "1",
  "url": "sec-example.html",
  "type": "Section",
  "number": "1.1",
  "title": "An example diagram",
  "body": " An example diagram   contains a diagram that could appear in a calculus textook and that is authored in PreFigure.   A calculus diagram created with PreFigure      Like PreTeXt , PreFigure is a markup language that is designed to reflect the structure of mathematical diagrams. The PreFigure source for creating this diagram is given in .    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x)=exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <\/diagram>   The PreFigure source to produce    PreFigure provides an XML vocabulary that allows an author to describe the components of a mathematical diagram and how they relate to one another in an intuitive way. The <diagram> element delimits all of the PreFigure input.  Notice that the graphical components of the diagram in include a grid, two axes, the graph of a function, the tangent line to the function at some point, and the point itself. The PreFigure source includes an XML element for each of these components.  The <coordinates> element defines our window into the -plane while the label is included inside the <point> element to which it is attached and wrapped in an <m> element so that it will be processed by MathJax.  In addition, authors may define mathematical objects, such as a real number and a function , which are to be used in the construction of subsequent graphical components.  Following the PreTeXt paradigm, PreFigure makes stylistic decisions about the appearance of graphical components so that authors can focus on the structure of their diagram. Authors can, however, override these decisions to modify the visual appearance of a diagram. Authors may also provide a publisher file setting their own defaults so that, for instance, all the diagrams in a textbook have a common visual style (yet to be implemented).  PreFigure XML source is processed by a Python package to create output images in the SVG format. As a result, diagrams will scale to an appropriate size when included in a document without sacrifiing quality or visual information.  "
},
{
  "id": "diagram-tangent",
  "level": "2",
  "url": "sec-example.html#diagram-tangent",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " A calculus diagram created with PreFigure     "
},
{
  "id": "listing-tangent",
  "level": "2",
  "url": "sec-example.html#listing-tangent",
  "type": "Listing",
  "number": "1.1.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x)=exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <\/diagram>   The PreFigure source to produce   "
},
{
  "id": "sec-accessibility",
  "level": "1",
  "url": "sec-accessibility.html",
  "type": "Section",
  "number": "1.2",
  "title": "Accessibility",
  "body": " Accessibility  PreFigure prioritizes the creation of accessible mathematical diagrams. In particular, authors can easily include annotations that control how a reader can navigate a diagram using a screen reader.      An annotated version of    (To be implemented) A reader may explore using a screen reader by first sending the focus to the diagram by either clicking in the diagram or pressing the tab key sufficiently many times. The arrow keys are then used to explore the diagram in more detail. For instance, the Down and Up arrow keys produce more or less detail while the Left and Right arrow keys focus on components at the same level. The annotations are read using the diagcess library created by Volker Sorge .  The modifications to the PreFigure source needed to produce the annotations are shown in .    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x) = exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph at=\"graph\" function='f' \/> <tangent-line at=\"tangent\" function=\"f\" point=\"a\"\/> <point at=\"point\" p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"The graph of a function and its tangent line at the point a equals 1\"> <annotation ref=\"graph-tangent\" text=\"The graph and its tangent line\"> <annotation ref=\"graph\" text=\"The graph of the function f\" sonify=\"yes\"\/> <annotation ref=\"point\" text=\"The point a comma f of a\"\/> <annotation ref=\"tangent\" text=\"The tangent line to the graph of f at the point\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>  The PreFigure source for the annotated diagram    Notice that important graphical components are given an at attribute, which serves as a handle to be used by the annotations. The <annotations> element contains a tree of <annotations> whose structure specifies how the screen reader will respond to arrow presses. An <annotation> element contains a reference to the handle of a graphical component, which specifies how the components are highlighted.  Furthermore, as seen in authors can create, from the same XML source, tactile versions of diagrams, including braille labels, suitable for embossing and including in a braille document.      A tactile version produced from the XML source in .   Indeed, the difficulty in creating tactile diagrams that emboss well was one of the original motivations of the PreFigure project.  "
},
{
  "id": "diagram-tangent-annotate",
  "level": "2",
  "url": "sec-accessibility.html#diagram-tangent-annotate",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": "    An annotated version of   "
},
{
  "id": "listing-tangent-annotate",
  "level": "2",
  "url": "sec-accessibility.html#listing-tangent-annotate",
  "type": "Listing",
  "number": "1.2.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x) = exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph at=\"graph\" function='f' \/> <tangent-line at=\"tangent\" function=\"f\" point=\"a\"\/> <point at=\"point\" p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"The graph of a function and its tangent line at the point a equals 1\"> <annotation ref=\"graph-tangent\" text=\"The graph and its tangent line\"> <annotation ref=\"graph\" text=\"The graph of the function f\" sonify=\"yes\"\/> <annotation ref=\"point\" text=\"The point a comma f of a\"\/> <annotation ref=\"tangent\" text=\"The tangent line to the graph of f at the point\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>  The PreFigure source for the annotated diagram   "
},
{
  "id": "diagram-tangent-tactile",
  "level": "2",
  "url": "sec-accessibility.html#diagram-tangent-tactile",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": "    A tactile version produced from the XML source in .  "
},
{
  "id": "sec-gallery",
  "level": "1",
  "url": "sec-gallery.html",
  "type": "Section",
  "number": "1.3",
  "title": "A gallery of diagrams",
  "body": " A gallery of diagrams  We include a sampling of diagrams created with PreFigure to give a sense of the possibilities.                     "
},
{
  "id": "sec-gallery-3",
  "level": "2",
  "url": "sec-gallery.html#sec-gallery-3",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": "                  "
},
{
  "id": "sec-installation",
  "level": "1",
  "url": "sec-installation.html",
  "type": "Section",
  "number": "1.4",
  "title": "Installation and use",
  "body": " Installation and use  PreFigure may be used in two different ways.   PreFigure is available in a GitHub Codespace. For many users, this will be a convenient way to create figures since it provides a fully configured authoring environment. More information is available at that link.    PreFigure may also be installed as a Python package on your own machine. There are, however, a few additional steps required so be sure to follow the instructions given here.      From a codespace or once installed, PreFigure can be called from the command line. General help is available with  prefig --help   and help for specific commands can be found with, for instance, prefig build --help .    To compile a PreFigure source file foo.xml into a diagram, use  prefig build foo.xml  A tactile version of the diagram is created with prefig build -f tactile foo.xml . In either case, the output image will appear in output\/foo.svg while annotations read by a screen reader are in output\/foo.xml .    Once an image is built, it may be viewed with prefig view foo If the diagram contains annotations, this will provide a means of exploring the diagram and annotations using the diagcess library. To view the diagram without annotations, use prefig view -i foo to ignore the annotations.    To make a PDF from a diagram that has already been built, use prefig pdf foo . Including the -b flag will cause the diagram to be built first: prefig pdf -b foo .    It is not essential to do this, but if PreFigure is installed locally, you may want to begin with prefig init , which has the effect of installing some MathJax libraries (PreFigure will try to install these later when needed) as well as the Braille29 font.  If you would like to explore the set of included examples, use prefig examples to copy the set of examples into the current directory.  You may initialize a new PreFigure project with prefig new . This copies a simple publication file and the diagcess library files into the current directory. PreFigure work done within this directory and any subdirectories will be able to find these when needed.     "
},
{
  "id": "sec-diagram",
  "level": "1",
  "url": "sec-diagram.html",
  "type": "Section",
  "number": "2.1",
  "title": "The <code class=\"code-inline tex2jax_ignore\"><diagram><\/code>element",
  "body": " The <diagram> element  Every PreFigure XML description is contained within a <diagram> element. The required dimensions attribute determines the dimensions of the drawing surface in SVG coordinates. For instance, dimensions=\"(300, 200)\" sets up a drawing surface that is 300 units wide and 200 units high.  Authors may additionally use a margins attribute to add some space around the drawing surface into which some components of the diagram, perhaps a label, may spill. By default, margins are set to 0. However, margins=\"5\" adds a margin of 5 units around all four sides of the drawing surface. Specifying margins=\"(20, 5, 10, 15)\" adds 20 units to the left, 5 to the bottom, 10 to the right, and 15 to the top.  Of course, SVG images scale well so we could, in principle, create diagrams of whatever size we wish and assume they will be scaled appropriately when placed in a surrounding document. However, when an SVG image is scaled, all the dimensions in the image, such as the thickness of lines and the size of labels, are scaled as well. It is therefore a good practice to set the dimensions to something roughly similar to what you hope to see in your document. Declaring that dimensions=\"(300, 300)\" produces an image whose labels closely match the size of surrounding text when included in a PreTeXt document.  Similarly, setting the margins to some positive value means that lines drawn on the boundary of the drawing surface are not unintentionally clipped. The diagram shown in was constructed with margins=\"0\" . Some of the grid lines appear on the boundary of the drawing surface and we only see the half of those lines that are in the drawing surface. This effect is apparent even in lines that are relatively thin.      A grid drawn without margins   "
},
{
  "id": "diagram-margins",
  "level": "2",
  "url": "sec-diagram.html#diagram-margins",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "    A grid drawn without margins  "
},
{
  "id": "sec-coordinates",
  "level": "1",
  "url": "sec-coordinates.html",
  "type": "Section",
  "number": "2.2",
  "title": "The <code class=\"code-inline tex2jax_ignore\"><coordinates><\/code> element",
  "body": " The <coordinates> element  Once the dimensions of the diagram are established in the opening <diagram> element, there is a default coordinate system provided. For instance, if we begin with <diagram\n    dimensions=\"(300, 200)\" margins=\"10\"> , we obtain a coordinate system as shown in .      The default coordinate system   Some authors may know that SVG's internal coordinate system places the origin in the upper-left corner of the image and the positive -axis points down. PreFigure, however, encourages authors to think mathematically so that all graphical components are described in terms of a mathematical coordinate system, such as that shown in . PreFigure will handle the necessary coordinate transforms between mathematical coordinates and SVG's internal coordinate system.  It is possible to describe diagrams using the default coordinate system seen in . More likely, however, an author intends us to view a specific region in the Cartesian plane. The <coordinates> element allows us to set a mathematical bounding box that lies over the drawing surface. For instance, <coordinates bbox=\"(-3,-2,9,6)\"> results in the coordinate system shown in . Any elements placed under this <coordinates> element will be drawn in this coordinate system.      A mathematical coordinate system defined using a < coordinates> element   This use of <coordinates> is possibly all you will ever use. However, a <coordinates> element can be given a destination attribute that describes a region inside the current bounding box where the new bounding box should reside. For example, the PreFigure source in produces two rectangles placed side by side as seen in     <diagram dimensions=\"(410, 200)\" margins=\"5\"> <coordinates bbox=\"(0,0,1,1)\" destination=\"(0,0,200,200)\"> <rectangle lower-left=\"(0,0)\" dimensions=\"(1,1)\" fill=\"blue\"\/> <\/coordinates> <coordinates bbox=\"(0,0,1,1)\" destination=\"(210,0,410,200)\"> <rectangle lower-left=\"(0,0)\" dimensions=\"(1,1)\" fill=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for        The use of two coordinate systems   There are some appropriate applications of this construction, such as diagrams that describe functions from the plane to the plane as you might see in linear algebra or complex analysis. However, this use of <coordinates> is generally discouraged. If you intend to place two, possibly related diagrams side by side in a PreTeXt document, you should create two separate diagrams and place them next to each other using a <sidebyside> . This is particularly important for the production of braille documents from PreTeXt source.  A second, possibly more legitimate, use of <coordinates> elements is to nest one inside another. For instance, we may wish to zoom in on a region in the diagram, as shown in       Using coordinate systems to zoom   The PreFigure source is given in . The background coordinate system is established by the <coordinate> element in Line 5. Then we include a few graphical components, such as the graph, tangent line, and point, drawn in that coordinate system. Then a second, nested <coordinate> element appears in Line 12 and we draw the graph, tangent line, and point again in the new coordinate system.    <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=3-x^2\/2<\/definition> <definition>a=1<\/definition> <definition>side=0.5<\/definition> <coordinates bbox=\"(0,0,4,4)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a,f(a))\"\/> <rectangle center=\"(a,f(a))\" dimensions=\"(side, side)\" stroke=\"gray\"\/> <coordinates bbox=\"(a-side\/2,f(a)-side\/2,a+side\/2,f(a)+side\/2)\" destination=\"(2.25,2.25,3.75,3.75)\"> <rectangle center=\"(a,f(a))\" dimensions=\"(side, side)\" stroke=\"gray\" fill=\"white\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a,f(a))\"\/> <\/coordinates> <\/coordinates> <\/diagram>   The PreFigure source for    "
},
{
  "id": "diagram-coordinates",
  "level": "2",
  "url": "sec-coordinates.html#diagram-coordinates",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": "    The default coordinate system  "
},
{
  "id": "diagram-coordinates-2",
  "level": "2",
  "url": "sec-coordinates.html#diagram-coordinates-2",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": "    A mathematical coordinate system defined using a < coordinates> element  "
},
{
  "id": "listing-sidebyside",
  "level": "2",
  "url": "sec-coordinates.html#listing-sidebyside",
  "type": "Listing",
  "number": "2.2.3",
  "title": "",
  "body": "  <diagram dimensions=\"(410, 200)\" margins=\"5\"> <coordinates bbox=\"(0,0,1,1)\" destination=\"(0,0,200,200)\"> <rectangle lower-left=\"(0,0)\" dimensions=\"(1,1)\" fill=\"blue\"\/> <\/coordinates> <coordinates bbox=\"(0,0,1,1)\" destination=\"(210,0,410,200)\"> <rectangle lower-left=\"(0,0)\" dimensions=\"(1,1)\" fill=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for   "
},
{
  "id": "diagram-sidebyside",
  "level": "2",
  "url": "sec-coordinates.html#diagram-sidebyside",
  "type": "Figure",
  "number": "2.2.4",
  "title": "",
  "body": "    The use of two coordinate systems  "
},
{
  "id": "diagram-zoom",
  "level": "2",
  "url": "sec-coordinates.html#diagram-zoom",
  "type": "Figure",
  "number": "2.2.5",
  "title": "",
  "body": "    Using coordinate systems to zoom  "
},
{
  "id": "listing-zoom",
  "level": "2",
  "url": "sec-coordinates.html#listing-zoom",
  "type": "Listing",
  "number": "2.2.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=3-x^2\/2<\/definition> <definition>a=1<\/definition> <definition>side=0.5<\/definition> <coordinates bbox=\"(0,0,4,4)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a,f(a))\"\/> <rectangle center=\"(a,f(a))\" dimensions=\"(side, side)\" stroke=\"gray\"\/> <coordinates bbox=\"(a-side\/2,f(a)-side\/2,a+side\/2,f(a)+side\/2)\" destination=\"(2.25,2.25,3.75,3.75)\"> <rectangle center=\"(a,f(a))\" dimensions=\"(side, side)\" stroke=\"gray\" fill=\"white\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a,f(a))\"\/> <\/coordinates> <\/coordinates> <\/diagram>   The PreFigure source for   "
},
{
  "id": "sec-definition",
  "level": "1",
  "url": "sec-definition.html",
  "type": "Section",
  "number": "2.3",
  "title": "The <code class=\"code-inline tex2jax_ignore\"><definition><\/code> element and user namespace",
  "body": " The <definition> element and user namespace  Most diagrams will contain some graphical components that are related to one another. For instance, our example diagram in contains the tangent line to a graph at a point and the point .      The example from   To help coordinate these relationships, PreFigure provides authors with a namespace in which to store important pieces of data (this is not to be confused with an XML namespace). The PreText source is again given in .    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x)=exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <\/diagram>   The PreFigure source   Notice that Line 2 includes an element that defines a quantity . This has the effect of assigning the value to the symbol a and provides the capability to refer to this symbol again in later elements. For example, Lines 7 and 8 introduce the tangent line and the point in terms of a .  Furthermore, Line 3 includes the definition of the function that is reused in constructing both the graph and the tangent line.  Behind the scenes, everything to the right of the equals sign in a <definition> is interpreted as an expression from a small subset of the Python programming language with the exception that a ^ is interpreted as exponentation. Expressions are validated to make sure they do not introduce malicious code.  The left side of the equals sign is interpreted as a symbol that refers to the result of evaluating the expression on the right side of the equals sign.  Lists and tuples are interpreted as numpy arrays, which enables authors to perform vector operations. Matrix multiplication is represented by @ . demonstrates with a linear combination of two vectors.      A linear combination of vectors   The PreFigure source is shown in . Notice how the vectors and are defined and then combined in Line 4 to form the vector comb .    <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>v=(2,-1)<\/definition> <definition>w=(-2,3)<\/definition> <definition>comb=2*v+w<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <grid-axes\/> <vector v=\"v\"\/> <vector v=\"w\"\/> <vector v=\"comb\" stroke=\"red\"\/> <label p=\"v\" alignment=\"se\"><m>{\\mathbf v}<\/m><\/label> <label p=\"w\" alignment=\"ne\"><m>{\\mathbf w}<\/m><\/label> <label p=\"comb\" alignment=\"ne\"><m>2{\\mathbf v}+{\\mathbf w}<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for    Another type of definition is given by the <derivative> tag as demonstrated by the following diagram and its PreFigure source.      A function and its derivative     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3-3*x+1<\/definition> <derivative name=\"fp\" function=\"f\"\/> <coordinates bbox=\"(-3,-3,3,3)\"> <grid-axes\/> <graph function=\"f\"\/> <graph function=\"fp\" stroke=\"green\"\/> <label p=\"(1.8,f(1.8))\" alignment=\"se\"><m>f(x)<\/m><\/label> <label p=\"(0.5,fp(0.5))\" alignment=\"se\"><m>f'(x)<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for    "
},
{
  "id": "diagram-tangent-2",
  "level": "2",
  "url": "sec-definition.html#diagram-tangent-2",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": "    The example from  "
},
{
  "id": "listing-tangent-2",
  "level": "2",
  "url": "sec-definition.html#listing-tangent-2",
  "type": "Listing",
  "number": "2.3.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x)=exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <\/diagram>   The PreFigure source  "
},
{
  "id": "diagram-linear-comb",
  "level": "2",
  "url": "sec-definition.html#diagram-linear-comb",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": "    A linear combination of vectors  "
},
{
  "id": "listing-linear-comb",
  "level": "2",
  "url": "sec-definition.html#listing-linear-comb",
  "type": "Listing",
  "number": "2.3.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>v=(2,-1)<\/definition> <definition>w=(-2,3)<\/definition> <definition>comb=2*v+w<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <grid-axes\/> <vector v=\"v\"\/> <vector v=\"w\"\/> <vector v=\"comb\" stroke=\"red\"\/> <label p=\"v\" alignment=\"se\"><m>{\\mathbf v}<\/m><\/label> <label p=\"w\" alignment=\"ne\"><m>{\\mathbf w}<\/m><\/label> <label p=\"comb\" alignment=\"ne\"><m>2{\\mathbf v}+{\\mathbf w}<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for   "
},
{
  "id": "diagram-derivative",
  "level": "2",
  "url": "sec-definition.html#diagram-derivative",
  "type": "Figure",
  "number": "2.3.5",
  "title": "",
  "body": "    A function and its derivative  "
},
{
  "id": "listing-derivative",
  "level": "2",
  "url": "sec-definition.html#listing-derivative",
  "type": "Listing",
  "number": "2.3.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3-3*x+1<\/definition> <derivative name=\"fp\" function=\"f\"\/> <coordinates bbox=\"(-3,-3,3,3)\"> <grid-axes\/> <graph function=\"f\"\/> <graph function=\"fp\" stroke=\"green\"\/> <label p=\"(1.8,f(1.8))\" alignment=\"se\"><m>f(x)<\/m><\/label> <label p=\"(0.5,fp(0.5))\" alignment=\"se\"><m>f'(x)<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for   "
},
{
  "id": "sec-graphical-attr",
  "level": "1",
  "url": "sec-graphical-attr.html",
  "type": "Section",
  "number": "3.1",
  "title": "General attributes",
  "body": " General attributes   We begin this chapter with a discussion of attributes common to all graphical elements. Many attributes modify properties that are either - or -dimensional. For instance, a <graph> will consist of a curve with an attribute stroke that determines its color. A <polygon> also has a stroke attribute that determines the color of the boundary of the polygon. It also has a fill attribute that determines the color used to shade the -dimensional region enclosed by the <polygon> .    Colors  There are several ways to specify a color, the most simple being to use its name, such as stroke=\"blue\" . Alternatively, one may specify the red, green, and blue components either in hexadecimal, fill=\"#rrggbb\" or fill=\"#rgb\" , or decimal, fill=\"rgb(r,g,b)\" , where each value is between 0 and 255. Some examples are shown in .      Some color choices   Color should be used judiciously, and the colors used in a single diagram should contrast highly with one another. If you find that you are using a lot of colors, perhaps the idea you are communicating could be better expressed in another way, such as a series of linked diagrams.    Stroke attributes  The two most important attributes you will use are stroke and thickness . All the possible stroke attributes are described here roughly in order of importance. You will likely never need the attributes toward the end of this list.   Stroke  The stroke attribute determines the color used to draw -dimensional components, as demonstrated in . For instance, stroke=\"blue\" will cause the -dimensional component of the element to be rendered in blue. If the attribute has the value stroke=\"none\" , then the -dimensional component of the element will not appear.  Note that tactile diagrams are rendered with stroke=\"black\" to guarantee predictable behavior when embossed.   Thickness  The attribute thickness determines the width of the -dimensional component in SVG coordinates. That is, if a graphical element has the attribute thickiness=\"1\" in a diagram whose dimensions are , then the width of the corresponding graphical component will be of size of the diagram. demonstrates different thicknesses.      Stroking with various thicknesses    Many graphical elements, such as graph and lines, have a default @thickness=2 .  Dash  Use the dash attribute to create dashed lines as shown in .      Dashed lines   In a tactile diagram, the dash attribute is useful for distinguishing different graphical components. Feedback from users indicates that dash=\"9 9\" is a good choice as the dashes and spaces are of an inch.   Opacity  Transparency is available using the opacity attribute. The value should be between 0.0 and 1.0 with 1.0, the default, being entirely opaque. This attribute applied to both the stroke and fill of a graphical component. If the opacity is meant to be applied to only the stroke, use stroke-opacity .      These lines have stroke=\"blue\" and varying opacities    Miterlimit  On rare occasions, you may find that you need to adjust the miterlimit attribute. As seen in , it sometimes happens that a small angle produces a sharp point. The point can be removed by lowering the miterlimit attribute from its default value of 4.      Lowering the miterlimit causes sharp points to be blunted    Linejoin  The linejoin attribute determines how lines are joined. The default value is linejoin=\"miter\" , whose behavior is controlled with the miterlimit attribute described above. However, this can be changed as shown in .      Various choices for the linejoin attribute    Linecap  The linecap attribute determines how lines are capped at their ends. The default value is linecap=\"butt\" with the other options shown in . The option linecap=\"square\" causes a square to added to the end of the line, which extends it slightly.      Options for linecap       Fill attributes  Similarly, there are a few attributes to describe the properties used to fill a region.   Fill  The fill specifies the color used to fill a region, as seen in .      Squares filled with fill=\"red\" , blue, and green.   Tactile diagrams are rendered with fill=\"lightgray\" to create a consistent texture.   Fill opacity  The fill-opacity attribute provides a given degree of transparency, as demonstrated in .      Squares filled with fill-opacity=\"1.0\" , 0.6, and 0.2.    Fill rule  The fill-rule attribute determines how more complicated regions are filled, as demonstrated in .      Squares filled with fill-rule=\"nonzero\" , the default, and evenodd.       Handles  In , we described how graphical elements can have an identifying handle, given by the value of its at attribute, by which they may be referenced from within an annotation. For instance, at=\"function-f\" provides an identification of this graphical element.  If you look inside an SVG image file created by PreFigure, you will see that the handles are converted into id attributes, and it is perfectly fine to use id=\"function-f\" rather than the at attribute. The at attribute is provided to avoid any confusion with xml:id attributes.  As we now begin to describe different types of graphical components, we will sometimes need to describe how a component's handle is processed.   "
},
{
  "id": "diagram-stroke",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-stroke",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": "    Some color choices  "
},
{
  "id": "diagram-thickness",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-thickness",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": "    Stroking with various thicknesses  "
},
{
  "id": "diagram-dash",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-dash",
  "type": "Figure",
  "number": "3.1.3",
  "title": "",
  "body": "    Dashed lines  "
},
{
  "id": "diagram-opacity",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-opacity",
  "type": "Figure",
  "number": "3.1.4",
  "title": "",
  "body": "    These lines have stroke=\"blue\" and varying opacities  "
},
{
  "id": "diagram-miterlimit",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-miterlimit",
  "type": "Figure",
  "number": "3.1.5",
  "title": "",
  "body": "    Lowering the miterlimit causes sharp points to be blunted  "
},
{
  "id": "diagram-linejoin",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-linejoin",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": "    Various choices for the linejoin attribute  "
},
{
  "id": "diagram-linecap",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-linecap",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": "    Options for linecap  "
},
{
  "id": "diagram-fill",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-fill",
  "type": "Figure",
  "number": "3.1.8",
  "title": "",
  "body": "    Squares filled with fill=\"red\" , blue, and green.  "
},
{
  "id": "diagram-fill-opacity",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-fill-opacity",
  "type": "Figure",
  "number": "3.1.9",
  "title": "",
  "body": "    Squares filled with fill-opacity=\"1.0\" , 0.6, and 0.2.  "
},
{
  "id": "diagram-fill-rule",
  "level": "2",
  "url": "sec-graphical-attr.html#diagram-fill-rule",
  "type": "Figure",
  "number": "3.1.10",
  "title": "",
  "body": "    Squares filled with fill-rule=\"nonzero\" , the default, and evenodd.  "
},
{
  "id": "sec-outlining",
  "level": "1",
  "url": "sec-outlining.html",
  "type": "Section",
  "number": "3.2",
  "title": "Outlining and <code class=\"code-inline tex2jax_ignore\"><group><\/code>s",
  "body": " Outlining and <group> s   On occasion, you may want a graphical component, such as the graph of a function or a point, to stand out from the background. This can be accomplished using the outline attribute. In fact, all components of a tactile diagram are automatically outlined.  In some sense, this section is about another stroke characteristic. However, the ability to outline informs some PreFigure design features that open up some new possibilities.    Outlining  To place an outline behind a component, set the attribute outline=\"yes\" . In , both the graph and the point have been outlined, which produces some white space around each element.      Outlining a graph and a point     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>a=1<\/definition> <definition>f(x)=exp(x\/3)*cos(x)<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <rectangle center=\"(0,0)\" dimensions=\"(8,8)\" fill=\"lightgray\"\/> <graph function=\"f\" outline=\"yes\"\/> <point p=\"(a,f(a))\" size=\"10\" outline=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   The outlines produced in tactile diagrams, which are added regardless of the value of outline , are of an inch, as demonstrated in .      The tactile version of .     Groups  When a component is stroked or filled, the paint applied covers up anything that has already been painted in the overlap. For tactile diagrams especially, this can lead to some undesirable behavior, as seen in . Here we see two solutions to a differential equation. Notice how the outline of one solution obscures the second and the fact that these two solutions have the same asymptotic behavior.      Two solutions to a differential equation rendered tactilely.   PreFigure's <group> element provides an alternative. More specifically, it allows us to group components together and place all their outlines before placing the components themselves. shows a different version of the previous diagram in which the two solutions have been included in a <group> element.      Employing a group to control outlining.   gives the PreFigure source for . Notce how the two solution curves are placed in a <group> , which is given the attribute outline=\"always\" . This has the effect of drawing all the outlines in the group first and then drawing all the components. The value always causes this behavior regardless of the output format. Setting outline=\"tactile\" requests this behavior only for tactile diagrams.    <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(y,t)=t-y<\/definition> <coordinates bbox=\"(-1,-1,4,4)\"> <grid-axes\/> <group outline=\"always\"> <plot-de-solution function=\"f\" t0=\"0\" y0=\"0\" domain=\"[0,4]\" outline=\"yes\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"2\" domain=\"[0,4]\" outline=\"yes\"\/> <\/group> <point p=\"(0,2)\"\/> <point p=\"(0,0)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   A second reason to group elements together is to facilitate annotations. A <group> element can be given a handle and then annotated as in . When the focus goes to this node of the annotation tree, the screen reader will zoom in on the region containing both the line and the label.    <group at=\"line-L1\"> <line endpoints=\"((-2,1),(2,2))\"\/> <label p=\"(2,2)\"> <m>L_1<\/m> <\/label> <\/group> ... <annotations> ... <annotation ref=\"line-L1\" text=\"The first line\"\/> ... <\/annotations>    Groups provide a means of organizing the graphical components in a diagram that reflects the structure of the diagram. Behind the scenes, for instance, a grid is a collection of lines that are placed in a group since we wish to call attention to the collection rather than each individual line.   "
},
{
  "id": "diagram-outline",
  "level": "2",
  "url": "sec-outlining.html#diagram-outline",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": "    Outlining a graph and a point  "
},
{
  "id": "listing-outline",
  "level": "2",
  "url": "sec-outlining.html#listing-outline",
  "type": "Listing",
  "number": "3.2.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>a=1<\/definition> <definition>f(x)=exp(x\/3)*cos(x)<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <rectangle center=\"(0,0)\" dimensions=\"(8,8)\" fill=\"lightgray\"\/> <graph function=\"f\" outline=\"yes\"\/> <point p=\"(a,f(a))\" size=\"10\" outline=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-outline-tactile",
  "level": "2",
  "url": "sec-outlining.html#diagram-outline-tactile",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": "    The tactile version of .  "
},
{
  "id": "diagram-outline-de",
  "level": "2",
  "url": "sec-outlining.html#diagram-outline-de",
  "type": "Figure",
  "number": "3.2.4",
  "title": "",
  "body": "    Two solutions to a differential equation rendered tactilely.  "
},
{
  "id": "diagram-outline-group",
  "level": "2",
  "url": "sec-outlining.html#diagram-outline-group",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": "    Employing a group to control outlining.  "
},
{
  "id": "listing-outline-group",
  "level": "2",
  "url": "sec-outlining.html#listing-outline-group",
  "type": "Listing",
  "number": "3.2.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(y,t)=t-y<\/definition> <coordinates bbox=\"(-1,-1,4,4)\"> <grid-axes\/> <group outline=\"always\"> <plot-de-solution function=\"f\" t0=\"0\" y0=\"0\" domain=\"[0,4]\" outline=\"yes\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"2\" domain=\"[0,4]\" outline=\"yes\"\/> <\/group> <point p=\"(0,2)\"\/> <point p=\"(0,0)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "listing-group-handle",
  "level": "2",
  "url": "sec-outlining.html#listing-group-handle",
  "type": "Listing",
  "number": "3.2.7",
  "title": "",
  "body": "  <group at=\"line-L1\"> <line endpoints=\"((-2,1),(2,2))\"\/> <label p=\"(2,2)\"> <m>L_1<\/m> <\/label> <\/group> ... <annotations> ... <annotation ref=\"line-L1\" text=\"The first line\"\/> ... <\/annotations>   "
},
{
  "id": "sec-grid-axes",
  "level": "1",
  "url": "sec-grid-axes.html",
  "type": "Section",
  "number": "3.3",
  "title": "Grid and Axes",
  "body": " Grid and Axes   We'll begin our discussion of graphical elements by looking at grids and axes, which will typically be in the background of a diagram. Since these are commonly used elements, there are many features that can be customized by an author.    <grid-axes>  The simplest way to include a grid and axes in a diagram is with the <grid-axes> element, which is demonstrated in .      The use of a <grid-axes> element.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-2,-2,5,5)\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Notice that PreFigure makes choices about the spacing of the grid lines and the locations at which labels are added to the axes. All of these features can be modified as will be described in the next two subsections, and .  The xlabel and ylabel tags are optional but provide a simple way to label the axes. We will have a lot more to say about labels later, but these particular labels will be processed by MathJax as if they were contained in an m element.  We will also discuss annotations in more depth later, but it is worth mentioning now that a <grid-axes> element will automatically annotate itself as the first component in the annotation tree.    Grids  The <grid> element provides a grid without adding axes. Without any attributes, this element will choose horizontal and vertical spacings and draw the grid lines stroke=\"lightgray\" and thickness=\"1\" . The stroke attributes can be modified as can the spacings using the spacings attribute. The value of the spacings consists of two lists, one for each of the horizontal and vertical grid lines, with each list having the form (start, space, end) . provides an example.      The attributes of a <grid> element.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid spacings=\"((0,1,10),(0,1\/2,10))\" stroke=\"blue\" thickness=\"2\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Including a basis attribute will produce a grid drawn in the given basis, as shown in .      The result of basis=\"((2,1),(1,2))\" .   When included in a <grid-axes> element, these attributes will be inherited by the resulting grid.    Axes  Axes are a bit more involved since there is a wider range of properties they possess. For instance, an <axes> tag with no attributes will produce axes similar to those seen in . In addition to the axes, we see that there are tick marks and labels as well. The positions of the tick marks and labels are automatically generated.      An <axes> element without attributes.   There are attributes that may be used to change this default behavior.  decorations  Setting decorations=\"no\" suppresses the automatic inclusion of tick marks and labels and produces unadorned axes. Regardless of the value of this attribute, features may be customized and added to the axes by including some of the following attributes.   xlabel and ylabel  As we have seen xlabel=\"t\" and ylabel=\"f(t)\" will place labels on the horizontal and vertical axes. These labels will be automatically wrapped in <m> elements and processed as latex by MathJax.   hticks and vticks  These attributes specify the position of tick marks on the axes. For instance, hticks=\"(-2,2,4)\" will place tick marks on the horizontal axis beginning at -2 and ending at 4 with a spacing of two units.   hlabels and vlabels  These attributes are similar to hticks and vticks except they specify the position of labels on the axes.   arrows  Arrows may be placed on ends of the axes by setting the arrows attribute. If arrows=\"1\" , then arrows will be included in the direction of increasing coordinates. arrows=\"2\" includes arrows at each end of the axes.     illustrates the use of some of these attributes.      The effect of some attributes of an <axes> element.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-2,-2,5,5)\"> <axes xlabel=\"\\alpha\" ylabel=\"g(\\alpha)\" hticks=\"(-2,1,5)\" hlabels=\"(-2,1,5)\" arrows=\"1\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   As with grids, these attributes may be included in a <grid-axes> element and inherited by the resulting axes.   "
},
{
  "id": "diagram-grid-axes",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-grid-axes",
  "type": "Figure",
  "number": "3.3.1",
  "title": "",
  "body": "    The use of a <grid-axes> element.  "
},
{
  "id": "subsec-grid-axes-4",
  "level": "2",
  "url": "sec-grid-axes.html#subsec-grid-axes-4",
  "type": "Listing",
  "number": "3.3.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-2,-2,5,5)\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-grid",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-grid",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": "    The attributes of a <grid> element.  "
},
{
  "id": "subsec-grid-4",
  "level": "2",
  "url": "sec-grid-axes.html#subsec-grid-4",
  "type": "Listing",
  "number": "3.3.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid spacings=\"((0,1,10),(0,1\/2,10))\" stroke=\"blue\" thickness=\"2\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-grid-basis",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-grid-basis",
  "type": "Figure",
  "number": "3.3.5",
  "title": "",
  "body": "    The result of basis=\"((2,1),(1,2))\" .  "
},
{
  "id": "diagram-axes",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-axes",
  "type": "Figure",
  "number": "3.3.6",
  "title": "",
  "body": "    An <axes> element without attributes.  "
},
{
  "id": "diagram-axes-example",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-axes-example",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": "    The effect of some attributes of an <axes> element.  "
},
{
  "id": "subsec-axes-7",
  "level": "2",
  "url": "sec-grid-axes.html#subsec-axes-7",
  "type": "Listing",
  "number": "3.3.8",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-2,-2,5,5)\"> <axes xlabel=\"\\alpha\" ylabel=\"g(\\alpha)\" hticks=\"(-2,1,5)\" hlabels=\"(-2,1,5)\" arrows=\"1\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-labels",
  "level": "1",
  "url": "sec-labels.html",
  "type": "Section",
  "number": "3.4",
  "title": "Labels",
  "body": " Labels   It can be helpful to label a graphical component in a diagram to call attention to that component and to connect it to the exposition in the surrounding text. PreFigure allows authors to add labels to a diagram and provides some options for their display.    Creating labels  The <label> element provides a way of adding text to a diagram. Labels are composed of plain text, mathematics, or a combination of both. Mathematics is written in latex and enclosed in an <m> element. demonstrates some possibilities with the PreFigure source given in .      Some sample labels.     <diagram dimensions=\"(250,200)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,4)\"> <label anchor=\"(1,3)\" alignment=\"east\"> <m>\\displaystyle f(a)=\\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{z-a}~dz<\/m> <\/label> <label anchor=\"(1,2)\" alignment=\"east\"> Temperature <\/label> <label anchor=\"(0.5,1)\" alignment=\"east\" rotate=\"90\" scale=\"1.5\"> Time <m>t<\/m> (sec) <\/label> <\/coordinates> <\/diagram>   The PreFigure source for .   Labels can span multiple lines and include bold and italic fonts, as shown in and . While this provides a lot of flexibility, authors should use these features judiciously and make sure text that more properly belongs in surrounding paragraphs does not creep into a diagram.      Some sample labels.     <diagram dimensions=\"(350,200)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,5)\"> <grid\/> <label anchor=\"(1,4)\" alignment=\"e\" justify=\"left\" clear-background=\"yes\"> This is a <b>bold<\/b> statement <newline\/> but we can have <it>itatics<\/it> <newline\/> and <it>italicized <b>bold<\/b><\/it> as well <\/label> <label anchor=\"(5,2)\" alignment=\"c\" justify=\"center\" clear-background=\"yes\" interline=\"10\"> Math can still appear: <newline\/> The <it>derivative<\/it> of <m>e^x<\/m> is <m>e^x<\/m> <\/label> <label anchor=\"(1,1)\" alignment=\"se\" scale=\"0.6\" clear-background=\"yes\"> Use the @scale attribute to change the font size. <\/label> <\/coordinates> <\/diagram>   The PreFigure source for .   Here are some important attributes that determine the placement of labels.  anchor  The label is placed relative to an anchor point with the default being anchor=\"(0,0)\" .   alignment  The alignment attribute specifies how the label is positioned relative to the anchor point. demonstrates the nine possibilities. Each alignment has a 1- or 2-character abbreviation so, for example, alignment=\"se\" is equivalent to alignment=\"southeast\" .      Aligning text to an anchor point.    offset  PreFigure inclues some padding between the anchor and the label, but you will sometimes find that you need to fine tune the position of a label using the offset label. Stating offset=\"(2,-3)\" will move the label two SVG units to the right and three units down from the position determined by the anchor and the alignment.   clear-background  Setting clear-background=\"yes\" causes a white rectangle to be filled behind the label so that it stands out from the background, as seen in .      Setting clear-background=\"yes\"    scale, rotate  As illustrated in , labels can be scaled and rotated.   justify  If a label includes more than one line, this attribute determines how the lines are spaced horizontally. The possible values are justify=\"center\", \"left\", \"right\" with center being the default.   interline  This attribute will have a numerical value that determines the vertical space, in SVG units, between lines. The default is interline=\"3\" .     We remind authors of one exception in that the xlabel and ylabel attributes of an <axes> element are interpreted as latex expressions and automatically wrapped in an <m> element.   Best practices  Authors should think carefully about the use of labels in their diagrams. In particular, it can be tempting to include lots of labels, possibly even long, complicated labels, in a diagram. However, diagrams should always be carefully integrated into a larger document, which means that the surrounding exposition and caption should help readers interpret the meaning of a diagram. Labels should mainly refer to graphical components and serve as a connection to the surrounding text. This is especially important for the production of tactile diagrams, in which labels that appear relatively short in print can become quite long when parsed into braille. So even though Cauchy's formula is indeed beautiful, you should probably not include it in a diagram.     Legends  PreFigure allows authors to include a legend with a diagram, as seen in and . A variety of graphical components may be included in a legend, including paths, such as the graph of a function, points, two-dimensional regions. While legends will be faithfully rendered in a tactile diagram, it is likely they will not be as informative as their appearance in a non-tactile diagram. In general, a better practice may be to place individual labels next to the components themselves.      Including a legend.   A <legend> tag defines a legend with <item> tags inside to declare the graphical components to include in the legend. An <item> tag must include a ref attribute that refers to the desired graphical component with the attached label inside the <item> tag.    <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=sin(x)<\/definition> <definition>g(x)=cos(x)<\/definition> <coordinates bbox=\"(-1,-1.5,10,2)\"> <grid-axes xlabel=\"t\"\/> <graph at=\"sin\" function=\"f\"\/> <graph at=\"cos\" function=\"g\" stroke=\"red\" dash=\"4 4\" tactile-dash=\"9 9\"\/> <point at=\"point\" p=\"(4,1)\" style=\"cross\" stroke=\"green\"\/> <rectangle at=\"rectangle\" center=\"(2,1.5)\" dimensions=\"(2,0.5)\" fill=\"magenta\" stroke=\"gray\"\/> <legend anchor=\"(bbox[2], bbox[3])\" alignment=\"sw\" opacity=\"0.9\" scale=\"0.9\" vertical-skip=\"10\"> <item ref=\"sin\"><m>x(t)<\/m><\/item> <item ref=\"cos\"><m>x'(t)<\/m><\/item> <item ref=\"point\">Point<\/item> <item ref=\"rectangle\">Rectangle<\/item> <\/legend> <\/coordinates> <\/diagram>   The PreFigure source for .   There are a number of ways to decorate a legend:  anchor  The required anchor attribute defines the location of the legend.   alignment  The alignment attribute declares how the legend is aligned relative to the anchor.   stroke  This attribute, whose value could be \"none\" , defines the color of the legend's border.   scale  This attribute scales the entire legend.   vertical-skip  The vertical-skip attribute defines the space between legend items. The default is 7 SVG units.   opacity  This controls the opacity of the legend's white background.      "
},
{
  "id": "diagram-label-example",
  "level": "2",
  "url": "sec-labels.html#diagram-label-example",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": "    Some sample labels.  "
},
{
  "id": "listing-label-example",
  "level": "2",
  "url": "sec-labels.html#listing-label-example",
  "type": "Listing",
  "number": "3.4.2",
  "title": "",
  "body": "  <diagram dimensions=\"(250,200)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,4)\"> <label anchor=\"(1,3)\" alignment=\"east\"> <m>\\displaystyle f(a)=\\frac{1}{2\\pi i}\\oint_C \\frac{f(z)}{z-a}~dz<\/m> <\/label> <label anchor=\"(1,2)\" alignment=\"east\"> Temperature <\/label> <label anchor=\"(0.5,1)\" alignment=\"east\" rotate=\"90\" scale=\"1.5\"> Time <m>t<\/m> (sec) <\/label> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-labels-lines",
  "level": "2",
  "url": "sec-labels.html#diagram-labels-lines",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": "    Some sample labels.  "
},
{
  "id": "listing-labels-lines",
  "level": "2",
  "url": "sec-labels.html#listing-labels-lines",
  "type": "Listing",
  "number": "3.4.4",
  "title": "",
  "body": "  <diagram dimensions=\"(350,200)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,5)\"> <grid\/> <label anchor=\"(1,4)\" alignment=\"e\" justify=\"left\" clear-background=\"yes\"> This is a <b>bold<\/b> statement <newline\/> but we can have <it>itatics<\/it> <newline\/> and <it>italicized <b>bold<\/b><\/it> as well <\/label> <label anchor=\"(5,2)\" alignment=\"c\" justify=\"center\" clear-background=\"yes\" interline=\"10\"> Math can still appear: <newline\/> The <it>derivative<\/it> of <m>e^x<\/m> is <m>e^x<\/m> <\/label> <label anchor=\"(1,1)\" alignment=\"se\" scale=\"0.6\" clear-background=\"yes\"> Use the @scale attribute to change the font size. <\/label> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-alignments",
  "level": "2",
  "url": "sec-labels.html#diagram-alignments",
  "type": "Figure",
  "number": "3.4.5",
  "title": "",
  "body": "    Aligning text to an anchor point.  "
},
{
  "id": "diagram-clear-background",
  "level": "2",
  "url": "sec-labels.html#diagram-clear-background",
  "type": "Figure",
  "number": "3.4.6",
  "title": "",
  "body": "    Setting clear-background=\"yes\"  "
},
{
  "id": "diagram-legend",
  "level": "2",
  "url": "sec-labels.html#diagram-legend",
  "type": "Figure",
  "number": "3.4.7",
  "title": "",
  "body": "    Including a legend.  "
},
{
  "id": "listing-legend",
  "level": "2",
  "url": "sec-labels.html#listing-legend",
  "type": "Listing",
  "number": "3.4.8",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=sin(x)<\/definition> <definition>g(x)=cos(x)<\/definition> <coordinates bbox=\"(-1,-1.5,10,2)\"> <grid-axes xlabel=\"t\"\/> <graph at=\"sin\" function=\"f\"\/> <graph at=\"cos\" function=\"g\" stroke=\"red\" dash=\"4 4\" tactile-dash=\"9 9\"\/> <point at=\"point\" p=\"(4,1)\" style=\"cross\" stroke=\"green\"\/> <rectangle at=\"rectangle\" center=\"(2,1.5)\" dimensions=\"(2,0.5)\" fill=\"magenta\" stroke=\"gray\"\/> <legend anchor=\"(bbox[2], bbox[3])\" alignment=\"sw\" opacity=\"0.9\" scale=\"0.9\" vertical-skip=\"10\"> <item ref=\"sin\"><m>x(t)<\/m><\/item> <item ref=\"cos\"><m>x'(t)<\/m><\/item> <item ref=\"point\">Point<\/item> <item ref=\"rectangle\">Rectangle<\/item> <\/legend> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-simple",
  "level": "1",
  "url": "sec-simple.html",
  "type": "Section",
  "number": "3.5",
  "title": "Points, lines, and polygons",
  "body": " Points, lines, and polygons   In this section, we will begin to introduce some simple graphical components, such as points, lines, vectors, and polygons.    Points  shows a collection of points and various attributes describing them. The PreFigure source follows in .      A collection of points.     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(0, 0,5, 5)\"> <point p=\"(1,4)\" size=\"20\" style=\"box\" fill=\"green\" stroke=\"black\" thickness=\"4\"\/> <point p=\"(2.5, 2.5)\" size=\"15\" style=\"diamond\" fill=\"blue\" stroke=\"none\"\/> <point p=\"(3,1)\" size=\"10\"> <m>(a,(f(a))<\/m> <\/point> <point p=\"(1,1)\" style=\"cross\" thickness=\"3\"\/> <point p=\"(4,4)\" style=\"plus\" thickness=\"3\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   In the usual way, a point will have stroke and fill attributes. There are additional attributes that specify its appearance.  p  The p gives the location at which the point will be centered.   style  This attribute controls the shape of the point. There are five options: style=\"box\", \"diamond\", \"circle\", \"cross\", \"plus\" with \"circle\" being the default.   size  This attribute specifies the size of the point in SVG units.     Notice that a label may be attached to a point by including the label's text within the <point> element. In this case, attributes may be added to the point, such as alignment and offset , to control the positioning of the label. Behind the scenes, the label and point are placed within a <group> element, and the point's handle transferred to the <group> for annotating.    Lines  A few lines are shown in with the PreFigure source presented in .      A collection of lines.     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,5)\"> <grid\/> <line endpoints=\"((1,4), (4,4.5))\" stroke=\"blue\" thickness=\"5\" arrows=\"1\"\/> <line p1=\"(1,3)\" p2=\"(4,2.5)\" stroke=\"lightgray\" thickness=\"20\"\/> <line p1=\"(1,3)\" p2=\"(4,2.5)\" endpoint-offsets=\"(10, -5)\" thickness=\"5\"\/> <line endpoints=\"((1,1.5),(4,2))\" stroke=\"green\" infinite=\"yes\"\/> <definition>p1=(1,1)<\/definition> <definition>p2=(4.5,0.5)<\/definition> <line endpoints=\"(p1,p2)\" endpoint-offsets=\"((10,0), (-10,0))\"\/> <label p=\"p1\" clear-background=\"yes\"><m>a<\/m><\/label> <label p=\"p2\" clear-background=\"yes\"><m>b<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for .   Any stroke attributes can be added to a line though fill attributes do no apply.  endpoints  The endpoints of a line may be specified together using the endpoints attribute or separately using p1 and p2 .   infinite  If infinite=\"yes\" , then the line is drawn as if it were infinite in extent.   arrows  If arrows=\"1\" , then an arrow is drawn at the second endpoint. If arrows=\"2\" , then an arrow is drawn at both endpoints.   reverse  Setting reverse=\"yes\" changes the direction of the line when adding arrows.  endpoint-offsets  Sometimes you may want the line to begin or end near, but not exactly, at the given endpoints. The bottom line in is an example in that the line is connecting two labels placed at two endpoints. We move the endpoints slightly so that the line does not interfere with the label. In this case, the endpoint offsets are a pair of vectors, each of which moves an endpoint by the given vector in SVG units.  Another line in the figure shows a second use of offsets. In this case, the offsets are a single pair of SVG units. The direction of the line is preserved but each endpoint is moved along the line by the given offset. This could be helpful when drawing arrows since the arrow head will extend slightly beyond the endpoint of the line.       Vectors  In some sense, <vector> s are a redundant element since we can always draw lines and attach arrows. However, a goal of PreFigure is to facilitate authors thinking mathematically about the exposition so <vector> should be used when including a vector in a diagram. Vectors are also drawn with a default thickness that differentiates them from lines drawn with their default attributes.      A collection of vectors.     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,5,5)\"> <grid-axes decorations=\"no\"\/> <vector v=\"(3,4)\"\/> <vector v=\"(1,3\/2)\" tail=\"(2,1)\" scale=\"2\" stroke=\"blue\"\/> <vector v=\"(1,3)\" tail=\"(3.5,1)\" head-location=\"0.8\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   In addition to stroke attributes, a vector supports the following attributes.  v  The attribute v is the 2-dimensional mathematical vector.   tail  The attribute tail represents the tail of the vector.   scale  The value of scale acts as scalar multiplication on v .   head-location  Usually, the head of a vector is placed at the tip of the vector. There may be occasions, however, when you want to place the head somewhere else along the shaft. Specifying head-location=\"0.8\" places the arrow head at a location 80% of the way from the tail to the tip.       Polygons  Polygons are paths drawn by connecting a set of points by line segments. The effect is different from drawing a set of line segments, however, since the ends of the line segments will be joined to form a whole. For example, the shape on the left of is drawn with two <line> s while that on the right is a <polygon> .      Two line segments on the left and a polygon on the right.   <polygon> s are quite versatile and should more properly be thought of as a polygonal path having both stroke and fill attributes. demonstrates some possibilities with the PreFigure soure given in .      Some sample polygons.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <polygon points=\"((-2,-1),(-4,-1),(-4,2))\" closed=\"yes\" fill=\"blue\"\/> <polygon points=\"(2,1)+2*(cos(k*pi\/4),sin(k*pi\/4))\" parameter=\"k=0..7\" closed=\"yes\" stroke=\"red\" thickness=\"4\"\/> <polygon points=\"((-4,4),(-1,4),(-1,-3),(3,-3))\" corner-radius=\"10\" arrows=\"1\" thickness=\"5\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   A <polygon> requires a set of points given by the points attributes. While you may simply list the points, PreFigure also allows you to provide a rule for generating the list of points.  points  The value of the points attribute may be a list of points or a single point containing a named parameter.   parameter  The parameter attribute gives a range of values for generating the list of points. The format is parameter=\"parameter_name=start..stop\" .   closed  By default, polygons are not closed, but closed=\"yes\" will close a polygon.   arrows  To place arrows at the end of a polygonal path, use arrows=\"1\" to add an arrow at the end and arrows=\"2\" to also add an arrow at the beginning.   reverse  Setting reverse=\"yes\" changes the direction of the polygonal path when attaching arrows.  corner-radius  A polygonal path can be smoothed out using the corner-radius attribute. The value of this attribute should be a positive number of SVG units.      "
},
{
  "id": "diagram-points",
  "level": "2",
  "url": "sec-simple.html#diagram-points",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": "    A collection of points.  "
},
{
  "id": "listing-points",
  "level": "2",
  "url": "sec-simple.html#listing-points",
  "type": "Listing",
  "number": "3.5.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(0, 0,5, 5)\"> <point p=\"(1,4)\" size=\"20\" style=\"box\" fill=\"green\" stroke=\"black\" thickness=\"4\"\/> <point p=\"(2.5, 2.5)\" size=\"15\" style=\"diamond\" fill=\"blue\" stroke=\"none\"\/> <point p=\"(3,1)\" size=\"10\"> <m>(a,(f(a))<\/m> <\/point> <point p=\"(1,1)\" style=\"cross\" thickness=\"3\"\/> <point p=\"(4,4)\" style=\"plus\" thickness=\"3\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-lines",
  "level": "2",
  "url": "sec-simple.html#diagram-lines",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": "    A collection of lines.  "
},
{
  "id": "listing-lines",
  "level": "2",
  "url": "sec-simple.html#listing-lines",
  "type": "Listing",
  "number": "3.5.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,5)\"> <grid\/> <line endpoints=\"((1,4), (4,4.5))\" stroke=\"blue\" thickness=\"5\" arrows=\"1\"\/> <line p1=\"(1,3)\" p2=\"(4,2.5)\" stroke=\"lightgray\" thickness=\"20\"\/> <line p1=\"(1,3)\" p2=\"(4,2.5)\" endpoint-offsets=\"(10, -5)\" thickness=\"5\"\/> <line endpoints=\"((1,1.5),(4,2))\" stroke=\"green\" infinite=\"yes\"\/> <definition>p1=(1,1)<\/definition> <definition>p2=(4.5,0.5)<\/definition> <line endpoints=\"(p1,p2)\" endpoint-offsets=\"((10,0), (-10,0))\"\/> <label p=\"p1\" clear-background=\"yes\"><m>a<\/m><\/label> <label p=\"p2\" clear-background=\"yes\"><m>b<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-vectors",
  "level": "2",
  "url": "sec-simple.html#diagram-vectors",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": "    A collection of vectors.  "
},
{
  "id": "listing-vectors",
  "level": "2",
  "url": "sec-simple.html#listing-vectors",
  "type": "Listing",
  "number": "3.5.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,5,5)\"> <grid-axes decorations=\"no\"\/> <vector v=\"(3,4)\"\/> <vector v=\"(1,3\/2)\" tail=\"(2,1)\" scale=\"2\" stroke=\"blue\"\/> <vector v=\"(1,3)\" tail=\"(3.5,1)\" head-location=\"0.8\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-polygon-v-line",
  "level": "2",
  "url": "sec-simple.html#diagram-polygon-v-line",
  "type": "Figure",
  "number": "3.5.7",
  "title": "",
  "body": "    Two line segments on the left and a polygon on the right.  "
},
{
  "id": "diagram-polygon",
  "level": "2",
  "url": "sec-simple.html#diagram-polygon",
  "type": "Figure",
  "number": "3.5.8",
  "title": "",
  "body": "    Some sample polygons.  "
},
{
  "id": "listing-polygon",
  "level": "2",
  "url": "sec-simple.html#listing-polygon",
  "type": "Listing",
  "number": "3.5.9",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <polygon points=\"((-2,-1),(-4,-1),(-4,2))\" closed=\"yes\" fill=\"blue\"\/> <polygon points=\"(2,1)+2*(cos(k*pi\/4),sin(k*pi\/4))\" parameter=\"k=0..7\" closed=\"yes\" stroke=\"red\" thickness=\"4\"\/> <polygon points=\"((-4,4),(-1,4),(-1,-3),(3,-3))\" corner-radius=\"10\" arrows=\"1\" thickness=\"5\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-circles",
  "level": "1",
  "url": "sec-circles.html",
  "type": "Section",
  "number": "3.6",
  "title": "Circles, ellipses, and rectangles",
  "body": " Circles, ellipses, and rectangles   This section demonstrates some PreFigure elements that generate circles, rectangles, and associated shapes.    Circles  Circles and ellipses are fairly simple. In addition to specifying the center and dimensions, there are only stroke and fill attributes. In contrast to polygons, these shapes are always closed.      A circle and ellipse.     <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(-5,0,5,6)\"> <grid\/> <circle center=\"(-2,3)\" radius=\"2\" fill=\"blue\" thickness=\"5\"\/> <ellipse center=\"(2,3)\" axes=\"(1,2)\" stroke=\"red\" rotate=\"pi\/6\" degrees=\"no\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   If an ellipse has the attribute axes=\"(a,b)\" , then the ellipse is a translate of . Notice that ellipse may be rotated with the rotate attribute.    Arcs  An <arc> represents a section of a circle and has stroke and fill attributes. There are a number of different ways to specify the arc, however, as seen in .      A collection of arcs.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <arc center=\"(-2,2)\" radius=\"2\" range=\"(270,45)\" arrows=\"1\" stroke=\"orange\" thickness=\"5\" reverse=\"yes\"\/> <definition>points=((4,-2),(1,-2),(3,2))<\/definition> <arc points=\"points\" radius=\"2\" sector=\"yes\" fill=\"lightgray\"\/> <polygon points=\"points\" stroke=\"black\"\/> <arc center=\"(-2,-3)\" radius=\"1\" range=\"(-2*pi\/3, 2*pi\/3)\" degrees=\"no\" stroke=\"blue\" thickness=\"5\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   To define an arc, we need a center, a radius, and an angular extent. Every arc needs a radius attribute. There are two ways to specify the center and angular extent:  Use the center and range attributes. The degrees=\"no\" means that the value of range is expressed in radians.   If a list of three points are given in the points attribute, then the center of the circle is the second point in the list and the angular extent is defined by vectors from the center to the other two points.  Other attributes include  arrows  The possible values are arrows=\"0\", \"1\", \"2\" depending on whether the arc has no arrows, one arrow at the end of the angular extent, or two arrows on both ends.  reverse  Setting reverse=\"yes\" changes the direction of the arc, but is only relevant when adding arrows.  sector  If sector=\"yes\" , then the sector is filled with the value of fill .      Angle markers  Angle markers are used to indicate angles between two line segments, such as two sides of a triangle.      A collection of angle marers.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <definition>points=((-2,1),(-4,2),(-1,4))<\/definition> <angle-marker points=\"points\" radius=\"20\" arrow=\"yes\"> <m>\\theta_1<\/m> <\/angle-marker> <polygon points=\"points\" stroke=\"black\"\/> <definition>points=((5,4),(2,2),(4,1))<\/definition> <angle-marker points=\"points\" radius=\"20\"> <m>\\theta_2<\/m> <\/angle-marker> <polygon points=\"points\" stroke=\"black\"\/> <definition>points=((3,-3),(-1,-4),(-3,0))<\/definition> <angle-marker points=\"points\" stroke=\"red\"\/> <angle-marker points=\"roll(points)\" stroke=\"red\"\/> <angle-marker points=\"roll(roll(points))\" stroke=\"red\"\/> <polygon points=\"points\" stroke=\"blue\" closed=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   An Angle marker is defined by a list of three points that define two line segments meeting at the center of the angle marker. The angle is defined in the counter-clockwise direction between the two sides.  points  The value of points must be a list of three points.  radius  The radius attribute defines the radius of the circular arc in SVG units. This is an optional attribute as PreFigure will determine a radius if one is not given. Smaller angles will have a larger radius.  arrow  An arrow can be added by declaring arrow=\"yes\" .  reverse  Setting reverse=\"yes\" changes the direction of the angle marker when attaching an arrow.  label  Notice that a label can be attached to an angle marker by enclosing the text within the <angle-marker> element. The positioning of the label will be determined by PreFigure, but alignment and offset attributes given to the <angle-marker> element will take precedence.    Notice the use of the roll operator which rolls the elements in a list: roll((a,b,c)) = (b,c,a) .    Rectangles  A rectangle is defined by specifying either its center or its lower-left corner as well as its dimensions. The corners can be rounded by setting the corner-radius attribute to the desired radius in SVG units, and the rectangle can be rotated about its center using the rotate attribute.      Two rectangles.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <rectangle lower-left=\"(-4,0)\" dimensions=\"(4,3)\" fill=\"green\"\/> <rectangle center=\"(2,-2)\" dimensions=\"(2,4)\" rotate=\"60\" stroke=\"blue\" thickness=\"5\" fill=\"white\" corner-radius=\"10\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .    "
},
{
  "id": "diagram-circle",
  "level": "2",
  "url": "sec-circles.html#diagram-circle",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": "    A circle and ellipse.  "
},
{
  "id": "listing-circle",
  "level": "2",
  "url": "sec-circles.html#listing-circle",
  "type": "Listing",
  "number": "3.6.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(-5,0,5,6)\"> <grid\/> <circle center=\"(-2,3)\" radius=\"2\" fill=\"blue\" thickness=\"5\"\/> <ellipse center=\"(2,3)\" axes=\"(1,2)\" stroke=\"red\" rotate=\"pi\/6\" degrees=\"no\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-arc",
  "level": "2",
  "url": "sec-circles.html#diagram-arc",
  "type": "Figure",
  "number": "3.6.3",
  "title": "",
  "body": "    A collection of arcs.  "
},
{
  "id": "listing-arc",
  "level": "2",
  "url": "sec-circles.html#listing-arc",
  "type": "Listing",
  "number": "3.6.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <arc center=\"(-2,2)\" radius=\"2\" range=\"(270,45)\" arrows=\"1\" stroke=\"orange\" thickness=\"5\" reverse=\"yes\"\/> <definition>points=((4,-2),(1,-2),(3,2))<\/definition> <arc points=\"points\" radius=\"2\" sector=\"yes\" fill=\"lightgray\"\/> <polygon points=\"points\" stroke=\"black\"\/> <arc center=\"(-2,-3)\" radius=\"1\" range=\"(-2*pi\/3, 2*pi\/3)\" degrees=\"no\" stroke=\"blue\" thickness=\"5\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-angle-marker",
  "level": "2",
  "url": "sec-circles.html#diagram-angle-marker",
  "type": "Figure",
  "number": "3.6.5",
  "title": "",
  "body": "    A collection of angle marers.  "
},
{
  "id": "listing-angle-marker",
  "level": "2",
  "url": "sec-circles.html#listing-angle-marker",
  "type": "Listing",
  "number": "3.6.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <definition>points=((-2,1),(-4,2),(-1,4))<\/definition> <angle-marker points=\"points\" radius=\"20\" arrow=\"yes\"> <m>\\theta_1<\/m> <\/angle-marker> <polygon points=\"points\" stroke=\"black\"\/> <definition>points=((5,4),(2,2),(4,1))<\/definition> <angle-marker points=\"points\" radius=\"20\"> <m>\\theta_2<\/m> <\/angle-marker> <polygon points=\"points\" stroke=\"black\"\/> <definition>points=((3,-3),(-1,-4),(-3,0))<\/definition> <angle-marker points=\"points\" stroke=\"red\"\/> <angle-marker points=\"roll(points)\" stroke=\"red\"\/> <angle-marker points=\"roll(roll(points))\" stroke=\"red\"\/> <polygon points=\"points\" stroke=\"blue\" closed=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-rectangle",
  "level": "2",
  "url": "sec-circles.html#diagram-rectangle",
  "type": "Figure",
  "number": "3.6.7",
  "title": "",
  "body": "    Two rectangles.  "
},
{
  "id": "listing-rectangle",
  "level": "2",
  "url": "sec-circles.html#listing-rectangle",
  "type": "Listing",
  "number": "3.6.8",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <rectangle lower-left=\"(-4,0)\" dimensions=\"(4,3)\" fill=\"green\"\/> <rectangle center=\"(2,-2)\" dimensions=\"(2,4)\" rotate=\"60\" stroke=\"blue\" thickness=\"5\" fill=\"white\" corner-radius=\"10\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-calculus",
  "level": "1",
  "url": "sec-calculus.html",
  "type": "Section",
  "number": "3.7",
  "title": "Calculus components",
  "body": " Calculus components   There is a collection of graphical components to facilitate diagrams that could appear in a calculus or precalculus course.    Graphs and tangent lines  To include the graph of a function, the function first needs to be defined inside a <definition> . By default, the domain of the function is assumed to be the horizontal extend of the current bounding box. The domain attribute can modify this, however.      The graphs of two functions.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3\/8 - 1.5*x<\/definition> <definition>g(s)=-sqrt(s+2)-1<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <graph function=\"g\" domain=\"(-2,5)\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   By default, a graph is drawn by connecting N=\"100\" short line segments. You may sometimes need to increase N if the graph varies a lot.  Tangent lines are similar except a point attribute should be included to define the point at which the tangent line will appear. As with functions, the tangent line will be drawn across the length of the bounding box unless modified using the domain attribute.      A graph with tangent lines.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3\/8 - 1.5*x<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"-1.5\"\/> <tangent-line function=\"f\" point=\"1.5\" domain=\"(0,3)\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .     Parametric curves  The <parametric-curve> tag includes the plot of a function defined parametrically.      Two parametric curves.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(t)=3*(cos(t), sin(t)) + (cos(10*t),sin(10*t))<\/definition> <definition>g(t)=(t^2,t^3)<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <parametric-curve function=\"f\" domain=\"(0,2*pi)\" N=\"200\" closed=\"yes\"\/> <parametric-curve function=\"g\" domain=\"(-2,2)\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Notice that a parametric curves needs a domain attribute and may be closed with closed=\"yes\" . Some curves may require a larger value of N for a smoother appearence.    Implicit curves  The solutions to an equation can be plotted with the <implicit-curve> tag.      Two implicit curves defined by      <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x,y) = y^2 - x^3 + x<\/definition> <coordinates bbox=\"[-2,-2,2,2]\"> <grid-axes \/> <implicit-curve function=\"f\" k=\"-1\" stroke=\"orange\" \/> <implicit-curve function=\"f\" k=\"1\" stroke=\"orange\" \/> <\/coordinates> <\/diagram>   The PreFigure source for .   Two required attributes are function and k . The algorithm relies on breaking the current bounding box into smaller rectangles and looking for solutions to recursively. For some complicated functions, the algorithm may miss a component of the curve. In this case, set the attribute initial-depth to a value higher than its default of 4. If two components are incorrectly joined, increase the depth to which the algorithm may recurse by raising depth beyond its default of 8.    Areas  The area under a curve and between curves are drawn with <area-under-curve> and <area-between-curves> .       The area under a curve and between two curves     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x)=2*sqrt(x)<\/definition> <coordinates bbox=\"[-1,-1,5,5]\"> <grid-axes \/> <area-under-curve function=\"f\" domain=\"(1,4)\" fill=\"lightgray\" stroke=\"black\"\/> <graph function=\"f\" domain=\"(0,5)\"\/> <\/coordinates> <\/diagram>    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x)=sqrt(x)<\/definition> <definition>g(x)=-2*atan(x)<\/definition> <coordinates bbox=\"[-1,-3,5,3]\"> <grid-axes \/> <area-between-curves function1=\"f\" function2=\"g\" domain=\"(1,3)\" fill=\"lightgray\" stroke=\"black\"\/> <graph function=\"f\" domain=\"(0,5)\"\/> <graph function=\"g\" domain=\"(0,5)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagrams in .   As with the other graphs we have seen in this section, the value of N can be increased to produce smoother graphs, in some cases.    Riemann sums  Finally, there is a <riemann-sum> element.      A Riemann sum     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x) = 2*log(x+2)<\/definition> <coordinates bbox=\"[-1,-1,5,5]\"> <grid-axes\/> <riemann-sum function=\"f\" domain=\"(1,4)\" rule=\"right\" N=\"6\" fill=\"lawngreen\" stroke=\"black\" width=\"1\"\/> <graph function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagrams in .   The possible values for rule are rule=\"left\", \"right\", \"mid\" .   "
},
{
  "id": "diagram-graph",
  "level": "2",
  "url": "sec-calculus.html#diagram-graph",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": "    The graphs of two functions.  "
},
{
  "id": "listing-graph",
  "level": "2",
  "url": "sec-calculus.html#listing-graph",
  "type": "Listing",
  "number": "3.7.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3\/8 - 1.5*x<\/definition> <definition>g(s)=-sqrt(s+2)-1<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <graph function=\"g\" domain=\"(-2,5)\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-tangent-line",
  "level": "2",
  "url": "sec-calculus.html#diagram-tangent-line",
  "type": "Figure",
  "number": "3.7.3",
  "title": "",
  "body": "    A graph with tangent lines.  "
},
{
  "id": "listing-tangent-line",
  "level": "2",
  "url": "sec-calculus.html#listing-tangent-line",
  "type": "Listing",
  "number": "3.7.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=x^3\/8 - 1.5*x<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"-1.5\"\/> <tangent-line function=\"f\" point=\"1.5\" domain=\"(0,3)\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-parametric",
  "level": "2",
  "url": "sec-calculus.html#diagram-parametric",
  "type": "Figure",
  "number": "3.7.5",
  "title": "",
  "body": "    Two parametric curves.  "
},
{
  "id": "listing-parametric",
  "level": "2",
  "url": "sec-calculus.html#listing-parametric",
  "type": "Listing",
  "number": "3.7.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(t)=3*(cos(t), sin(t)) + (cos(10*t),sin(10*t))<\/definition> <definition>g(t)=(t^2,t^3)<\/definition> <coordinates bbox=\"(-5,-5,5,5)\"> <grid-axes decorations=\"no\"\/> <parametric-curve function=\"f\" domain=\"(0,2*pi)\" N=\"200\" closed=\"yes\"\/> <parametric-curve function=\"g\" domain=\"(-2,2)\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-implicit-curve",
  "level": "2",
  "url": "sec-calculus.html#diagram-implicit-curve",
  "type": "Figure",
  "number": "3.7.7",
  "title": "",
  "body": "    Two implicit curves defined by   "
},
{
  "id": "listing-implicit-curve",
  "level": "2",
  "url": "sec-calculus.html#listing-implicit-curve",
  "type": "Listing",
  "number": "3.7.8",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x,y) = y^2 - x^3 + x<\/definition> <coordinates bbox=\"[-2,-2,2,2]\"> <grid-axes \/> <implicit-curve function=\"f\" k=\"-1\" stroke=\"orange\" \/> <implicit-curve function=\"f\" k=\"1\" stroke=\"orange\" \/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-area",
  "level": "2",
  "url": "sec-calculus.html#diagram-area",
  "type": "Figure",
  "number": "3.7.9",
  "title": "",
  "body": "     The area under a curve and between two curves  "
},
{
  "id": "listing-area",
  "level": "2",
  "url": "sec-calculus.html#listing-area",
  "type": "Listing",
  "number": "3.7.10",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x)=2*sqrt(x)<\/definition> <coordinates bbox=\"[-1,-1,5,5]\"> <grid-axes \/> <area-under-curve function=\"f\" domain=\"(1,4)\" fill=\"lightgray\" stroke=\"black\"\/> <graph function=\"f\" domain=\"(0,5)\"\/> <\/coordinates> <\/diagram>    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition>f(x)=sqrt(x)<\/definition> <definition>g(x)=-2*atan(x)<\/definition> <coordinates bbox=\"[-1,-3,5,3]\"> <grid-axes \/> <area-between-curves function1=\"f\" function2=\"g\" domain=\"(1,3)\" fill=\"lightgray\" stroke=\"black\"\/> <graph function=\"f\" domain=\"(0,5)\"\/> <graph function=\"g\" domain=\"(0,5)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagrams in .  "
},
{
  "id": "diagram-riemann-sum",
  "level": "2",
  "url": "sec-calculus.html#diagram-riemann-sum",
  "type": "Figure",
  "number": "3.7.11",
  "title": "",
  "body": "    A Riemann sum  "
},
{
  "id": "listing-riemann-sum",
  "level": "2",
  "url": "sec-calculus.html#listing-riemann-sum",
  "type": "Listing",
  "number": "3.7.12",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x) = 2*log(x+2)<\/definition> <coordinates bbox=\"[-1,-1,5,5]\"> <grid-axes\/> <riemann-sum function=\"f\" domain=\"(1,4)\" rule=\"right\" N=\"6\" fill=\"lawngreen\" stroke=\"black\" width=\"1\"\/> <graph function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagrams in .  "
},
{
  "id": "sec-diffeqs",
  "level": "1",
  "url": "sec-diffeqs.html",
  "type": "Section",
  "number": "3.8",
  "title": "Differential equations",
  "body": " Differential equations   There are a few elements for creating diagrams containing solutions to differential equations.    Slope Fields  Slope fields for a 1-variable ordinary differential equation and for autonomous systems can be drawn using the <slope-field> element. On the left of is shown a slope field for the equation while the right shows the slope field for the autonomous system        The slope fields for two differential equations.   The PreFigure source input for the left diagram in is given in .    <diagram dimensions=\"(300,300)\" margins=\"10\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"t\" ylabel=\"y\"\/> <slope-field function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the slope field of a 1-variable differential equation   The grid on which the slope field is drawn can be changed using the spacings attribute similar to that of the grid element .  To obtain the slope field for an autonomous system, include the attribute system=\"yes\" in the <slope-field> element. Also, arrows are added to the <slope-field> using the arrows=\"yes\" attribute. Notice that the function defining the differential equation is naturally vector-valued now.    <diagram dimensions=\"(300,300)\" margins=\"10\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"y_0\" ylabel=\"y_1\"\/> <slope-field function=\"f\" system=\"yes\" arrows=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the slope field of an autonomous sytem.     Solutions to differential equations  PreFigure provides an element <de-solve> that generates and saves the solution of a differential equation. You could think of this as a definition that can be reused possibly several times.  Solutions are then plotted using the <plot-de-solution> element. demonstrates how to use these elements.      Some solutions to a differential equation.     <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes\/> <slope-field function=\"f\"\/> <de-solve function=\"f\" t0=\"0\" y0=\"3\" t1=\"4\" name=\"linear\"\/> <plot-de-solution solution=\"linear\" stroke=\"red\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"-2\" t1=\"4\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   shows two ways in which a solution to the differential equation can be plotted. In Line 5, we solve the differential equation with initial value over the interval . This interval is broken into N=100 steps by default, but this value can be modified using the N attribute. This solution is also given an attribute name=\"linear\" . To plot the solution, we use a <plot-de-solution> element in Line 7 passing the name of the solution as an attribute.  Alernatively, these two elements can be combined into a single <plot-de-solution> element, as shown in Line 8. Most likely, you will use this second method more frequently since it involves a single element.  There are more possibilities when solving a system. shows a solution to a autonomous system.      Solutions and to a system of differential equations.     <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-1,-4,6,4]\"> <grid-axes\/> <de-solve function=\"f\" t0=\"0\" t1=\"6\" y0=\"(3,0)\" name=\"oscillator\"\/> <plot-de-solution solution=\"oscillator\" axes=\"(t,y0)\"\/> <plot-de-solution solution=\"oscillator\" axes=\"(t,y1)\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Notice how we generate a solution in Line 5 of and save it with the name=\"oscillator\" . Then we reuse this solution to plot the components and as functions of in Line 6 and 7. There are now three quantities involved, , , and , so we use the axes attribute to state which of these quantities will appear on the horizontal and vertical axis. This notation for the axes holds no matter what variables are used to define the function on the right side of the differential equation.  We can also create phase portraits as in . The source code demonstrates how a method can be supplied to the differential equation solver. Differential equations are solved numerically using a Python package that presents a choice of methods. Most of the time, the default \"RK45\" method will suffice, but \"LSODA\" may be helpful when working with stiff equations.      A few trajectories in the phase plane of an autonomous system.     <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"y_0\" ylabel=\"y_1\"\/> <slope-field function=\"f\" system=\"yes\" stroke=\"darkorange\" arrows=\"yes\"\/> <plot-de-solution function=\"f\" t0=\"0\" t1=\"2*pi\" y0=\"(1,0)\" axes=\"(y0,y1)\"\/> <plot-de-solution function=\"f\" t0=\"0\" t1=\"2*pi\" method=\"RK23\" y0=\"(2,0)\" axes=\"(y0,y1)\"\/> <plot-de-solution function=\"f\" t0=\"0\" t1=\"2*pi\" method=\"LSODA\" y0=\"(3,0)\" axes=\"(y0,y1)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .    "
},
{
  "id": "diagram-slope-field",
  "level": "2",
  "url": "sec-diffeqs.html#diagram-slope-field",
  "type": "Figure",
  "number": "3.8.1",
  "title": "",
  "body": "     The slope fields for two differential equations.  "
},
{
  "id": "listing-slope-field",
  "level": "2",
  "url": "sec-diffeqs.html#listing-slope-field",
  "type": "Listing",
  "number": "3.8.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"10\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"t\" ylabel=\"y\"\/> <slope-field function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the slope field of a 1-variable differential equation  "
},
{
  "id": "listing-slope-field-2",
  "level": "2",
  "url": "sec-diffeqs.html#listing-slope-field-2",
  "type": "Listing",
  "number": "3.8.3",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"10\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"y_0\" ylabel=\"y_1\"\/> <slope-field function=\"f\" system=\"yes\" arrows=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the slope field of an autonomous sytem.  "
},
{
  "id": "diagram-de-plot",
  "level": "2",
  "url": "sec-diffeqs.html#diagram-de-plot",
  "type": "Figure",
  "number": "3.8.4",
  "title": "",
  "body": "    Some solutions to a differential equation.  "
},
{
  "id": "listing-de-plot",
  "level": "2",
  "url": "sec-diffeqs.html#listing-de-plot",
  "type": "Listing",
  "number": "3.8.5",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes\/> <slope-field function=\"f\"\/> <de-solve function=\"f\" t0=\"0\" y0=\"3\" t1=\"4\" name=\"linear\"\/> <plot-de-solution solution=\"linear\" stroke=\"red\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"-2\" t1=\"4\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-de-plot-2",
  "level": "2",
  "url": "sec-diffeqs.html#diagram-de-plot-2",
  "type": "Figure",
  "number": "3.8.6",
  "title": "",
  "body": "    Solutions and to a system of differential equations.  "
},
{
  "id": "listing-de-plot-2",
  "level": "2",
  "url": "sec-diffeqs.html#listing-de-plot-2",
  "type": "Listing",
  "number": "3.8.7",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-1,-4,6,4]\"> <grid-axes\/> <de-solve function=\"f\" t0=\"0\" t1=\"6\" y0=\"(3,0)\" name=\"oscillator\"\/> <plot-de-solution solution=\"oscillator\" axes=\"(t,y0)\"\/> <plot-de-solution solution=\"oscillator\" axes=\"(t,y1)\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-de-phase",
  "level": "2",
  "url": "sec-diffeqs.html#diagram-de-phase",
  "type": "Figure",
  "number": "3.8.8",
  "title": "",
  "body": "    A few trajectories in the phase plane of an autonomous system.  "
},
{
  "id": "listing-de-phase",
  "level": "2",
  "url": "sec-diffeqs.html#listing-de-phase",
  "type": "Listing",
  "number": "3.8.9",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"y_0\" ylabel=\"y_1\"\/> <slope-field function=\"f\" system=\"yes\" stroke=\"darkorange\" arrows=\"yes\"\/> <plot-de-solution function=\"f\" t0=\"0\" t1=\"2*pi\" y0=\"(1,0)\" axes=\"(y0,y1)\"\/> <plot-de-solution function=\"f\" t0=\"0\" t1=\"2*pi\" method=\"RK23\" y0=\"(2,0)\" axes=\"(y0,y1)\"\/> <plot-de-solution function=\"f\" t0=\"0\" t1=\"2*pi\" method=\"LSODA\" y0=\"(3,0)\" axes=\"(y0,y1)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-paths",
  "level": "1",
  "url": "sec-paths.html",
  "type": "Section",
  "number": "3.9",
  "title": "Paths",
  "body": " Paths   The <path> tag provides authors with the means to create more complicated objects by concatenating simpler ones. As a preview, notice that there are two <path> s in . The simpler path, in red, is a single quadratic Bézier curve. The more complicated path, in blue, is composed of line segments, a circular arc, and a cubic Bézier curve, with one of the line segments decorated with a zig-zag pattern.      The graphical result of two <path> s.     Defining paths  We will first focus on how a <path> is defined by concatenating simpler pieces. Throughout the definition of a path, there is always a current point that is used to construct the next piece of the path. For this reason, a <path> tag must always have a start attribute, which serves as the initial point of the path.   shows two paths and the PreFigure source given in .      The graphical result of two <path> s.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decortions=\"no\"\/> <path start=\"(1,1)\" stroke=\"blue\" arrows=\"1\"> <lineto point=\"(3,2)\"\/> <moveto point=\"(4,2)\"\/> <horizontal distance=\"2\"\/> <vertical distance=\"4\"\/> <arc center=\"(7.5,6)\" radius=\"1.5\" range=\"(180,0)\"\/> <cubic-bezier controls=\"((9,2), (8,2), (7,2))\"\/> <\/path> <path start=\"(1,5)\" stroke=\"red\" arrows=\"2\"> <quadratic-bezier controls=\"((1,8),(5,8))\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the paths in   The first path in blue, defined by lines 4 through 11, demonstrates many options that are available when defining a path.   lineto  The <lineto> tag has a point attribute, as seen in line 5. This has the effect of adding to the path a line segment from the current point to the point and updating the current point.    rlineto  This is similar to a <line> tag except that the point attribute is interpreted as a relative change from the current point.    moveto  The <moveto> tag, shown in line 6, simply updates the current point to the given point without adding a line segment. In effect, it is like picking up your pen.    rmoveto  This tag interpretes the point as a relative change in the current point.    horizontal  The <horizontal> tag is like a <lineto> where the new endpoint is a given horizontal distance from the current point.    arc  An <arc> tag adds a circular arc to the path with a specific center , radius , and angular range . If the first point of the arc is not the same as the current point, then a line segment from the current point to the first point is added.    cubic-bezier and quadratic bezier  Bézier curves are smooth curves defined in terms of a set of control points . Mathematically, Bézier curves are parametric curves whose coordinate functions are polynomials. PreFigure provides access to both cubic and quadratic Bézier curves through the tags <cubic-bezier> and <quadratic-bezier> .  shows two paths consisting only of Bézier curves. The lower path consists of two cubic Bézier curves. The labeled point is the starting point while , , and are the three given control points. The final control point, , is the endpoint of the first Bézier curve while the control points and define the initial and final velocities of the curve.      The graphical result of two <path> s.   A quadratic Bézier curve, the upper curve in , is similar but is defined by only two control points.  shows the PreFigure source, omitting some of the details, of .    <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decortions=\"no\"\/> <path start=\"(1,3)\" stroke=\"blue\"> <cubic-bezier controls=\"((2,5),(4,5),(5,3))\"\/> <cubic-bezier controls=\"((6,1),(8,1),(9,3))\"\/> <\/path> <path start=\"(5,7)\" stroke=\"red\"> <quadratic-bezier controls=\"((4,9),(8,9))\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the Bézier curves in     Repeat  A <repeat> tag can be included inside a <path> as long as its children are allowed in a <path> . See for more details.    Other constructions  Some familiar constructions, such as <graph> , <parametric_curve> , and <polygon> can also be placed inside of a <path> . Ths is demonstrated in and its accompanying .      The graphical result of two <path> s.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decorations=\"no\"\/> <definition>f(x)=3*sin((x-1)\/8*pi)+5<\/definition> <path start=\"(1,1)\" stroke=\"blue\" closed=\"yes\"> <vertical distance=\"4\"\/> <graph function=\"f\" domain=\"(1,5)\"\/> <lineto point=\"(5,1)\"\/> <\/path> <definition>f(t)=(8-0.25*sin(2*(t-1)*pi),t)<\/definition> <path start=\"(8,1)\" stroke=\"red\"> <parametric-curve function=\"f\" domain=\"(1,6)\"\/> <polygon points=\"((8,6),(9,8),(8,9),(7,8),(8,6))\"\/> <moveto point=\"(7,8)\"\/> <horizontal distance=\"2\"\/> <moveto point=\"(8,6)\"\/> <vertical distance=\"3\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the Bézier curves in      A <path> may have an attribute closed=\"yes\" that closes the path. You will need to be explicit about how the <path> is displayed by specifying a stroke and\/or fill .    Decorations  Line segments within a <path> defined by a <lineto> , <rlineto> , <horizontal> , or <vertical> may be decorated in a variety of ways using a decoration attribute. The value of this attribute is a set of parameters separated by semicolons, the first of which is the type of decoration, either coil , wave , zigzag , or capacitor , as shown in       Some path decorations.     <diagram dimensions=\"(400,200)\" margins=\"5\"> <coordinates bbox=\"(-3,2,10,10)\"> <path start=\"(1,9)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"coil; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,9)\" alignment=\"w\">coil<\/label> <path start=\"(1,7)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"wave; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,7)\" alignment=\"w\">wave<\/label> <path start=\"(1,5)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"capacitor; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,5)\" alignment=\"w\">capacitor<\/label> <path start=\"(1,3)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"zigzag; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,3)\" alignment=\"w\">zigzag<\/label> <\/coordinates> <\/diagram>   The PreFigure source for the coils in .   The coil decoration resembles a spring. You can specify the number of coils on the line segment, the dimensions , and the center .  The dimensions parameter is an ordered pair whose values are interepreted in SVG coordinate lengths. The first number gives the horizontal distance traversed by one coil while the second gives the maximum vertical displacement from the undecorated line segment.  The center parameter is a number between 0 and 1, interpreted as a fraction of the length of the line segment, that indicates where the center of the coils lies. The value of this parameter is 0.5 by default, which centers the coil on the line segment.  shows some examples with the source code in .      Some coil decorations.     <diagram dimensions=\"(300,200)\" margins=\"5\"> <coordinates bbox=\"(0,-0.5,5,2.5)\"> <path start=\"(0,0)\" stroke=\"black\"> <lineto point=\"(5,0)\" decoration=\"coil; number=5; dimensions=(10,10); center=0.7\"\/> <\/path> <path start=\"(0,1)\" stroke=\"black\"> <horizontal distance=\"5\" decoration=\"coil; number=10; dimensions=(10,5)\"\/> <\/path> <path start=\"(0,2)\" stroke=\"black\"> <lineto point=\"(5,2)\" decoration=\"coil; number=5; dimensions=(5,10)\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the coils in .   demonstrates the use of some coils.      Using decorations to represent a spring. Adapted from Tom Judson's Ordinary Differential Equations Project .     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,4)\" destination=\"(10,160,300,300)\"> <polygon points=\"((0,4),(0,0),(5,0))\" stroke=\"black\"\/> <path start=\"(0,1)\" stroke=\"black\"> <lineto point=\"(3.5,1)\" decoration=\"coil; number=5 ; dimensions=(15,10)\"\/> <\/path> <rectangle center=\"(4,1)\" dimensions=\"(1,2)\" fill=\"lightblue\" stroke=\"black\"\/> <\/coordinates> <coordinates bbox=\"(0,0,5,4)\" destination=\"(10,10,300,150)\"> <polygon points=\"((0,4),(0,0),(5,0))\" stroke=\"black\"\/> <path start=\"(0,1)\" stroke=\"black\"> <lineto point=\"(2,1)\" decoration=\"coil; number=5 ; dimensions=(6,10)\"\/> <\/path> <rectangle center=\"(2.5,1)\" dimensions=\"(1,2)\" fill=\"lightblue\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   The zigzag decoration has the same parameters as a coil while the capacitor decoration has a center parameter, which again defaults to 0.5, and a dimensions parameter, which controls the horizontal gap and vertical length      An RLC circuit. Adapted from Tom Judson's Ordinary Differential Equations Project .     <diagram dimensions=\"(300,200)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,9)\"> <path start=\"(1,1)\" stroke=\"black\"> <lineto point=\"(1,8)\"\/> <lineto point=\"(9,8)\" decoration=\"coil; number=5; dimensions=(10,10)\"\/> <lineto point=\"(9,1)\" decoration=\"capacitor; dimensions=(12,15)\"\/> <lineto point=\"(1,1)\" decoration=\"zigzag; number=5; dimensions=(10,10)\"\/> <\/path> <point p=\"(1,4.5)\" size=\"20\" fill=\"white\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .    "
},
{
  "id": "diagram-path-preview",
  "level": "2",
  "url": "sec-paths.html#diagram-path-preview",
  "type": "Figure",
  "number": "3.9.1",
  "title": "",
  "body": "    The graphical result of two <path> s.  "
},
{
  "id": "diagram-paths",
  "level": "2",
  "url": "sec-paths.html#diagram-paths",
  "type": "Figure",
  "number": "3.9.2",
  "title": "",
  "body": "    The graphical result of two <path> s.  "
},
{
  "id": "listing-paths",
  "level": "2",
  "url": "sec-paths.html#listing-paths",
  "type": "Listing",
  "number": "3.9.3",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decortions=\"no\"\/> <path start=\"(1,1)\" stroke=\"blue\" arrows=\"1\"> <lineto point=\"(3,2)\"\/> <moveto point=\"(4,2)\"\/> <horizontal distance=\"2\"\/> <vertical distance=\"4\"\/> <arc center=\"(7.5,6)\" radius=\"1.5\" range=\"(180,0)\"\/> <cubic-bezier controls=\"((9,2), (8,2), (7,2))\"\/> <\/path> <path start=\"(1,5)\" stroke=\"red\" arrows=\"2\"> <quadratic-bezier controls=\"((1,8),(5,8))\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the paths in  "
},
{
  "id": "diagram-bezier",
  "level": "2",
  "url": "sec-paths.html#diagram-bezier",
  "type": "Figure",
  "number": "3.9.4",
  "title": "",
  "body": "    The graphical result of two <path> s.  "
},
{
  "id": "listing-bezier",
  "level": "2",
  "url": "sec-paths.html#listing-bezier",
  "type": "Listing",
  "number": "3.9.5",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decortions=\"no\"\/> <path start=\"(1,3)\" stroke=\"blue\"> <cubic-bezier controls=\"((2,5),(4,5),(5,3))\"\/> <cubic-bezier controls=\"((6,1),(8,1),(9,3))\"\/> <\/path> <path start=\"(5,7)\" stroke=\"red\"> <quadratic-bezier controls=\"((4,9),(8,9))\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the Bézier curves in  "
},
{
  "id": "diagram-more-paths",
  "level": "2",
  "url": "sec-paths.html#diagram-more-paths",
  "type": "Figure",
  "number": "3.9.6",
  "title": "",
  "body": "    The graphical result of two <path> s.  "
},
{
  "id": "listing-more-paths",
  "level": "2",
  "url": "sec-paths.html#listing-more-paths",
  "type": "Listing",
  "number": "3.9.7",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decorations=\"no\"\/> <definition>f(x)=3*sin((x-1)\/8*pi)+5<\/definition> <path start=\"(1,1)\" stroke=\"blue\" closed=\"yes\"> <vertical distance=\"4\"\/> <graph function=\"f\" domain=\"(1,5)\"\/> <lineto point=\"(5,1)\"\/> <\/path> <definition>f(t)=(8-0.25*sin(2*(t-1)*pi),t)<\/definition> <path start=\"(8,1)\" stroke=\"red\"> <parametric-curve function=\"f\" domain=\"(1,6)\"\/> <polygon points=\"((8,6),(9,8),(8,9),(7,8),(8,6))\"\/> <moveto point=\"(7,8)\"\/> <horizontal distance=\"2\"\/> <moveto point=\"(8,6)\"\/> <vertical distance=\"3\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the Bézier curves in  "
},
{
  "id": "diagram-path-decorations",
  "level": "2",
  "url": "sec-paths.html#diagram-path-decorations",
  "type": "Figure",
  "number": "3.9.8",
  "title": "",
  "body": "    Some path decorations.  "
},
{
  "id": "listing-path-decorations",
  "level": "2",
  "url": "sec-paths.html#listing-path-decorations",
  "type": "Listing",
  "number": "3.9.9",
  "title": "",
  "body": "  <diagram dimensions=\"(400,200)\" margins=\"5\"> <coordinates bbox=\"(-3,2,10,10)\"> <path start=\"(1,9)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"coil; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,9)\" alignment=\"w\">coil<\/label> <path start=\"(1,7)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"wave; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,7)\" alignment=\"w\">wave<\/label> <path start=\"(1,5)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"capacitor; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,5)\" alignment=\"w\">capacitor<\/label> <path start=\"(1,3)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"zigzag; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,3)\" alignment=\"w\">zigzag<\/label> <\/coordinates> <\/diagram>   The PreFigure source for the coils in .  "
},
{
  "id": "diagram-coils",
  "level": "2",
  "url": "sec-paths.html#diagram-coils",
  "type": "Figure",
  "number": "3.9.10",
  "title": "",
  "body": "    Some coil decorations.  "
},
{
  "id": "listing-coils",
  "level": "2",
  "url": "sec-paths.html#listing-coils",
  "type": "Listing",
  "number": "3.9.11",
  "title": "",
  "body": "  <diagram dimensions=\"(300,200)\" margins=\"5\"> <coordinates bbox=\"(0,-0.5,5,2.5)\"> <path start=\"(0,0)\" stroke=\"black\"> <lineto point=\"(5,0)\" decoration=\"coil; number=5; dimensions=(10,10); center=0.7\"\/> <\/path> <path start=\"(0,1)\" stroke=\"black\"> <horizontal distance=\"5\" decoration=\"coil; number=10; dimensions=(10,5)\"\/> <\/path> <path start=\"(0,2)\" stroke=\"black\"> <lineto point=\"(5,2)\" decoration=\"coil; number=5; dimensions=(5,10)\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the coils in .  "
},
{
  "id": "diagram-mass-spring",
  "level": "2",
  "url": "sec-paths.html#diagram-mass-spring",
  "type": "Figure",
  "number": "3.9.12",
  "title": "",
  "body": "    Using decorations to represent a spring. Adapted from Tom Judson's Ordinary Differential Equations Project .  "
},
{
  "id": "listing-mass-spring",
  "level": "2",
  "url": "sec-paths.html#listing-mass-spring",
  "type": "Listing",
  "number": "3.9.13",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,4)\" destination=\"(10,160,300,300)\"> <polygon points=\"((0,4),(0,0),(5,0))\" stroke=\"black\"\/> <path start=\"(0,1)\" stroke=\"black\"> <lineto point=\"(3.5,1)\" decoration=\"coil; number=5 ; dimensions=(15,10)\"\/> <\/path> <rectangle center=\"(4,1)\" dimensions=\"(1,2)\" fill=\"lightblue\" stroke=\"black\"\/> <\/coordinates> <coordinates bbox=\"(0,0,5,4)\" destination=\"(10,10,300,150)\"> <polygon points=\"((0,4),(0,0),(5,0))\" stroke=\"black\"\/> <path start=\"(0,1)\" stroke=\"black\"> <lineto point=\"(2,1)\" decoration=\"coil; number=5 ; dimensions=(6,10)\"\/> <\/path> <rectangle center=\"(2.5,1)\" dimensions=\"(1,2)\" fill=\"lightblue\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-rcl-circuit",
  "level": "2",
  "url": "sec-paths.html#diagram-rcl-circuit",
  "type": "Figure",
  "number": "3.9.14",
  "title": "",
  "body": "    An RLC circuit. Adapted from Tom Judson's Ordinary Differential Equations Project .  "
},
{
  "id": "listing-rcl-circuit",
  "level": "2",
  "url": "sec-paths.html#listing-rcl-circuit",
  "type": "Listing",
  "number": "3.9.15",
  "title": "",
  "body": "  <diagram dimensions=\"(300,200)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,9)\"> <path start=\"(1,1)\" stroke=\"black\"> <lineto point=\"(1,8)\"\/> <lineto point=\"(9,8)\" decoration=\"coil; number=5; dimensions=(10,10)\"\/> <lineto point=\"(9,1)\" decoration=\"capacitor; dimensions=(12,15)\"\/> <lineto point=\"(1,1)\" decoration=\"zigzag; number=5; dimensions=(10,10)\"\/> <\/path> <point p=\"(1,4.5)\" size=\"20\" fill=\"white\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-shapes",
  "level": "1",
  "url": "sec-shapes.html",
  "type": "Section",
  "number": "3.10",
  "title": "Shape constructions and clipping",
  "body": " Shape constructions and clipping   This section introduces shapes and some things you can do with them. A shape is any graphical component that defines a two-dimensional region, such as a <circle> , <rectangle> , <polygon> , or <path> . The tags <graph> or <parametric-curve> also define shapes as, behind the scenes, PreFigure will close the paths they define.    Defining shapes  Shapes are defined within a special <define-shapes> tag, which make them available for later use. , and the accompanying PreFigure source in , provides a simple example.      A simple use of the <shape> tag.     <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,6)\"> <define-shapes> <circle at=\"A\" center=\"(4,3)\" radius=\"2\"\/> <\/define-shapes> <shape shape=\"A\" fill=\"magenta\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,6)\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in   Note the use of the <define-shapes> tag in lines 3 through 5. Within this tag, we define a circle with the handle at=\"A\" . Any stroke or fill attributes will be ignored in the definition since we mean to focus solely on the geometric shape. Also, it is important that shapes be defined within a <coordinates> tag as the definitions become invalid once we leave this coordinate system.  We then recall the shape in line 7 and supply attributes for filling and stroking it within that element. Notice that the attribute shape=\"A\" serves as a reference to the previously defined shape. As we will see, we sometimes want to recall two or more shapes at once, which we could do with a comma-separated list. For this reason, PreFigure accepts either the attribute shapes (note the plural) or shape as a convenience.    Shape Constructions  Of course, we could easily have created the diagram in with a single <circle> tag. Shapes, however, provide us with access to some set operations, such as intersections, unions, and differences. For example, demonstrates how we can define the difference of two sets .      The difference of two sets.     <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,6)\"> <define-shapes> <circle at=\"A\" center=\"(4,3)\" radius=\"2\"\/> <circle at=\"B\" center=\"(6,3)\" radius=\"2\"\/> <\/define-shapes> <shape shapes=\"A,B\" operation=\"difference\" fill=\"magenta\" stroke=\"black\"\/> <shape shape=\"A\" stroke=\"black\"\/> <shape shape=\"B\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,6)\" stroke=\"black\"\/> <label anchor=\"(2,3)\" alignment=\"nw\"><m>A<\/m><\/label> <label anchor=\"(8,3)\" alignment=\"ne\"><m>B<\/m><\/label> <label anchor=\"(5,0.5)\"><m>A\\setminus B<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in   In this example, we define two sets and in the <define-shapes> tag. We then construct and display their intersection using the <shape> tag in lines 8 and 9. Notice that we use the shapes attribute to recall the two shapes (though shape=\"A,B\" would also suffice). The attribute operation=\"difference\" declares that this set should be constructed as the difference of the two sets. In this case, shapes=\"B,A\" would yield the difference .  Other operations include operation=\"union\" , operation=\"intersection\" , and operation=\"symmetric-difference\" or \"sym-diff\" . These four operations are demonstrated in .             Four sets operations.   Intersections, unions, and symmetric differences can take any number of sets, while a difference requires exactly two.  A fifth operation is operation=\"convex-hull\" , which produces the convex hull of the union of the given shapes. includes a demonstration, with the convex hull of two sets outlined in red. This is not an especially realistic diagram, but it does demonstrate some of the possibilities when working with shapes.      The convex hull of the union of two shapes.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <define-shapes> <circle at=\"circle\" center=\"(6,7)\" radius=\"2\"\/> <rectangle at=\"lower-rectangle\" center=\"(4,4)\" dimensions=\"(5,4)\" corner-radius=\"10\"\/> <rectangle at=\"upper-rectangle\" center=\"(4,7.5)\" dimensions=\"(5,1)\" corner-radius=\"10\"\/> <shape shapes=\"circle,lower-rectangle,upper-rectangle\" operation=\"sym-diff\" at=\"sym-diff\"\/> <circle at=\"right-circle\" center=\"(8.5,8.5)\" radius=\"1\"\/> <\/define-shapes> <grid-axes decorations=\"no\"\/> <shape shapes=\"sym-diff,right-circle\" operation=\"convex-hull\" stroke=\"red\" thickness=\"8\"\/> <shape shapes=\"sym-diff\" fill=\"magenta\" stroke=\"black\"\/> <shape shapes=\"circle\" stroke=\"black\"\/> <shape shapes=\"upper-rectangle\" stroke=\"black\"\/> <shape shapes=\"lower-rectangle\" stroke=\"black\"\/> <shape shape=\"right-circle\" fill=\"blue\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in     Clipping  A second use of shapes is to clip a diagram with the <clip> tag. provides a demonstration. Notice that the clipping shape is applied only to elements that are children of the <clip> tag.      Using the <clip> tag.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <define-shapes> <rectangle at=\"square1\" center=\"(4,4)\" dimensions=\"(3,3)\" corner-radius=\"10\"\/> <rectangle at=\"square2\" center=\"(3,6)\" dimensions=\"(2,2)\" corner-radius=\"5\"\/> <shape at=\"clip\" shapes=\"square1, square2\" operation=\"union\"\/> <circle at=\"circle\" center=\"(6,6)\" radius=\"3\"\/> <\/define-shapes> <shape shape=\"circle\" fill=\"lightgray\" stroke=\"gray\"\/> <clip shape=\"clip\"> <shape shape=\"circle\" fill=\"blue\" stroke=\"black\"\/> <\/clip> <shape shape=\"clip\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,10)\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in    "
},
{
  "id": "diagram-shape-start",
  "level": "2",
  "url": "sec-shapes.html#diagram-shape-start",
  "type": "Figure",
  "number": "3.10.1",
  "title": "",
  "body": "    A simple use of the <shape> tag.  "
},
{
  "id": "listing-shape-start",
  "level": "2",
  "url": "sec-shapes.html#listing-shape-start",
  "type": "Listing",
  "number": "3.10.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,6)\"> <define-shapes> <circle at=\"A\" center=\"(4,3)\" radius=\"2\"\/> <\/define-shapes> <shape shape=\"A\" fill=\"magenta\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,6)\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in  "
},
{
  "id": "diagram-shape-difference",
  "level": "2",
  "url": "sec-shapes.html#diagram-shape-difference",
  "type": "Figure",
  "number": "3.10.3",
  "title": "",
  "body": "    The difference of two sets.  "
},
{
  "id": "listing-shape-difference",
  "level": "2",
  "url": "sec-shapes.html#listing-shape-difference",
  "type": "Listing",
  "number": "3.10.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,6)\"> <define-shapes> <circle at=\"A\" center=\"(4,3)\" radius=\"2\"\/> <circle at=\"B\" center=\"(6,3)\" radius=\"2\"\/> <\/define-shapes> <shape shapes=\"A,B\" operation=\"difference\" fill=\"magenta\" stroke=\"black\"\/> <shape shape=\"A\" stroke=\"black\"\/> <shape shape=\"B\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,6)\" stroke=\"black\"\/> <label anchor=\"(2,3)\" alignment=\"nw\"><m>A<\/m><\/label> <label anchor=\"(8,3)\" alignment=\"ne\"><m>B<\/m><\/label> <label anchor=\"(5,0.5)\"><m>A\\setminus B<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in  "
},
{
  "id": "diagram-shape-construct",
  "level": "2",
  "url": "sec-shapes.html#diagram-shape-construct",
  "type": "Figure",
  "number": "3.10.5",
  "title": "",
  "body": "           Four sets operations.  "
},
{
  "id": "diagram-shape-convex",
  "level": "2",
  "url": "sec-shapes.html#diagram-shape-convex",
  "type": "Figure",
  "number": "3.10.6",
  "title": "",
  "body": "    The convex hull of the union of two shapes.  "
},
{
  "id": "listing-shape-convex",
  "level": "2",
  "url": "sec-shapes.html#listing-shape-convex",
  "type": "Listing",
  "number": "3.10.7",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <define-shapes> <circle at=\"circle\" center=\"(6,7)\" radius=\"2\"\/> <rectangle at=\"lower-rectangle\" center=\"(4,4)\" dimensions=\"(5,4)\" corner-radius=\"10\"\/> <rectangle at=\"upper-rectangle\" center=\"(4,7.5)\" dimensions=\"(5,1)\" corner-radius=\"10\"\/> <shape shapes=\"circle,lower-rectangle,upper-rectangle\" operation=\"sym-diff\" at=\"sym-diff\"\/> <circle at=\"right-circle\" center=\"(8.5,8.5)\" radius=\"1\"\/> <\/define-shapes> <grid-axes decorations=\"no\"\/> <shape shapes=\"sym-diff,right-circle\" operation=\"convex-hull\" stroke=\"red\" thickness=\"8\"\/> <shape shapes=\"sym-diff\" fill=\"magenta\" stroke=\"black\"\/> <shape shapes=\"circle\" stroke=\"black\"\/> <shape shapes=\"upper-rectangle\" stroke=\"black\"\/> <shape shapes=\"lower-rectangle\" stroke=\"black\"\/> <shape shape=\"right-circle\" fill=\"blue\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in  "
},
{
  "id": "diagram-shape-clip",
  "level": "2",
  "url": "sec-shapes.html#diagram-shape-clip",
  "type": "Figure",
  "number": "3.10.8",
  "title": "",
  "body": "    Using the <clip> tag.  "
},
{
  "id": "listing-shape-clip",
  "level": "2",
  "url": "sec-shapes.html#listing-shape-clip",
  "type": "Listing",
  "number": "3.10.9",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <define-shapes> <rectangle at=\"square1\" center=\"(4,4)\" dimensions=\"(3,3)\" corner-radius=\"10\"\/> <rectangle at=\"square2\" center=\"(3,6)\" dimensions=\"(2,2)\" corner-radius=\"5\"\/> <shape at=\"clip\" shapes=\"square1, square2\" operation=\"union\"\/> <circle at=\"circle\" center=\"(6,6)\" radius=\"3\"\/> <\/define-shapes> <shape shape=\"circle\" fill=\"lightgray\" stroke=\"gray\"\/> <clip shape=\"clip\"> <shape shape=\"circle\" fill=\"blue\" stroke=\"black\"\/> <\/clip> <shape shape=\"clip\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,10)\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in  "
},
{
  "id": "sec-repeat",
  "level": "1",
  "url": "sec-repeat.html",
  "type": "Section",
  "number": "4.1",
  "title": "The <code class=\"code-inline tex2jax_ignore\"><repeat><\/code> element",
  "body": " The <repeat> element  Some diagrams contain a number of components that are similar and differ only in a few attributes. For example, shows several solutions to a differential equation with different initial values.      Several solutions to a differential equation.   Of course, we could simply include a <plot-de-solution> element for each one, but this could be difficult to maintain if we decide to make some small change. Instead, PreFigure offers a <repeat> element that can streamline this process, as illustrated by the PreFigure source code in .    <diagram width=\"300\" height=\"300\" margins=\"10\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid at=\"grid\"\/> <axes at=\"axes\" xlabel=\"t\" ylabel=\"y\"\/> <slope-field at=\"slope-field\" function=\"f\"\/> <repeat parameter=\"k=-4..4\"> <plot-de-solution at=\"solution\" function=\"f\" t0=\"0\" y0=\"k\" domain=\"[0,4]\" stroke=\"orange\" \/> <point at=\"initial-value\" p=\"(0,k)\" size=\"4\" fill=\"orange\" \/> <\/repeat> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"Solutions to the differential equation dy dt = t - y\"> <annotation ref=\"grid\" text=\"The coordinate grid\"\/> <annotation ref=\"axes\" text=\"The coordinate axes\"\/> <annotation ref=\"slope-field\" text=\"The slope field\"\/> <annotation ref=\"solutions\" text=\"A collection of solution curves\"> <annotation ref=\"solution-k=-4\" text=\"The solution with initial value -4\"\/> <annotation ref=\"solution-k=-3\" text=\"The solution with initial value -3\"\/> <annotation ref=\"solution-k=-2\" text=\"The solution with initial value -2\"\/> <annotation ref=\"solution-k=-1\" text=\"The solution with initial value -1\"\/> <annotation ref=\"solution-k=0\" text=\"The solution with initial value 0\"\/> <annotation ref=\"solution-k=1\" text=\"The solution with initial value 1\"\/> <annotation ref=\"solution-k=2\" text=\"The solution with initial value 2\"\/> <annotation ref=\"solution-k=3\" text=\"The solution with initial value 3\"\/> <annotation ref=\"solution-k=4\" text=\"The solution with initial value 4\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .   Line 7 contains a <repeat> element with the attribute parameter=\"k=-4..4\" . This places the parameter name k into the user namespace with the value of -4 and adds the <plot-de-solution> and <point> elements contained within the <repeat> element. This repeats with the values .  The annotations included in show how the handles within the <repeat> element are generated. If an element inside a repeat element has a handle at=\"handle\" , then the graphical component generated when the parameter is, say, param=value is given the handle at=\"handle-param=value\" . For example, when k=2 , the solution has the handle at=\"solution-k=2\" . There is not yet a repeat feature for annotations.  A second example, given in , shows how labels can be managed within a <repeat> element.      The roots of unity.     <diagram width=\"300\" height=\"300\" margins=\"5\"> <definition> alignments=['ne','ne','ne','nw','nw','sw','se','se'] <\/definition> <definition substitution=\"no\"> labels=['1','\\omega','i','\\omega^3','-1','\\omega^5','-i','\\omega^7'] <\/definition> <definition>f(t)=(cos(pi*t\/4),sin(pi*t\/4))<\/definition> <coordinates bbox=\"[-1.4,-1.4,1.4,1.4]\"> <grid at=\"grid\" \/> <axes at=\"axes\" labels=\"no\" \/> <circle at=\"unit-circle\" center=\"(0,0)\" radius=\"1\" stroke=\"blue\"\/> <repeat parameter=\"k=0..7\"> <point at=\"point\" p=\"f(k)\" alignment=\"alignments[k]\"> <m>${labels[k]}<\/m> <\/point> <\/repeat> <\/coordinates> <annotations> <annotation id=\"figure\" text=\"The eighth roots of unity\"> <annotation id=\"axes\" text=\"The coordinate axes\" \/> <annotation id=\"grid\" text=\"The coordinate grid\" \/> <annotation id=\"unit-circle\" text=\"The unit circle\" circular=\"true\"> <annotation id=\"point-k=0\" text=\"The primitive eighth root of unity to the power zero\" speech=\"one\"\/> <annotation id=\"point-k=1\" text=\"The primitive eighth root of unity\" speech=\"omega\"\/> <annotation id=\"point-k=2\" text=\"The primitive eighth root of unity squared\" speech=\"i\"\/> <annotation id=\"point-k=3\" text=\"The primitive eighth root of unity cubed\" speech=\"omega cubed\"\/> <annotation id=\"point-k=4\" text=\"The primitive eighth root of unity to the fourth\" speech=\"minus one\"\/> <annotation id=\"point-k=5\" text=\"The primitive eighth root of unity to the fifth\" speech=\"omega to the fifth\"\/> <annotation id=\"point-k=6\" text=\"The primitive eighth root of unity to the sixth\" speech=\"minus i\"\/> <annotation id=\"point-k=7\" text=\"The primitive eighth root of unity to the seventh\" speech=\"omega to the seventh\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .   Lines 5 through 7 define a set of labels, one for each of the eight points. Remember that ^ is usually interpreted as the numerical exponentiation operator. Since we wish to preserve this character for the label, we include the attribute substitution=\"no\" to prevent ^ being reinterpreted. Notice that the label is given as ${labels[k]} since anything inside ${...} is evaluated in the user namespace.  We can also nest <repeat> elements as illustrated in and PreFigure source .      A <repeat> nested inside another.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"[-1,-1,5,5]\"> <grid\/> <repeat parameter=\"row=0..4\"> <repeat parameter=\"col=0..4\"> <rectangle at=\"rectangle\" center=\"(col, row)\" dimensions=\"(3\/4,3\/4)\" fill=\"blue\"\/> <\/repeat> <\/repeat> <\/coordinates> <\/diagram>   The PreFigure source for .   A typical handle for one of these rectangles is at=\"rectangle-row=2-col=1\" .  "
},
{
  "id": "diagram-diffeq-repeat",
  "level": "2",
  "url": "sec-repeat.html#diagram-diffeq-repeat",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": "    Several solutions to a differential equation.  "
},
{
  "id": "listing-diffeq-repeat",
  "level": "2",
  "url": "sec-repeat.html#listing-diffeq-repeat",
  "type": "Listing",
  "number": "4.1.2",
  "title": "",
  "body": "  <diagram width=\"300\" height=\"300\" margins=\"10\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid at=\"grid\"\/> <axes at=\"axes\" xlabel=\"t\" ylabel=\"y\"\/> <slope-field at=\"slope-field\" function=\"f\"\/> <repeat parameter=\"k=-4..4\"> <plot-de-solution at=\"solution\" function=\"f\" t0=\"0\" y0=\"k\" domain=\"[0,4]\" stroke=\"orange\" \/> <point at=\"initial-value\" p=\"(0,k)\" size=\"4\" fill=\"orange\" \/> <\/repeat> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"Solutions to the differential equation dy dt = t - y\"> <annotation ref=\"grid\" text=\"The coordinate grid\"\/> <annotation ref=\"axes\" text=\"The coordinate axes\"\/> <annotation ref=\"slope-field\" text=\"The slope field\"\/> <annotation ref=\"solutions\" text=\"A collection of solution curves\"> <annotation ref=\"solution-k=-4\" text=\"The solution with initial value -4\"\/> <annotation ref=\"solution-k=-3\" text=\"The solution with initial value -3\"\/> <annotation ref=\"solution-k=-2\" text=\"The solution with initial value -2\"\/> <annotation ref=\"solution-k=-1\" text=\"The solution with initial value -1\"\/> <annotation ref=\"solution-k=0\" text=\"The solution with initial value 0\"\/> <annotation ref=\"solution-k=1\" text=\"The solution with initial value 1\"\/> <annotation ref=\"solution-k=2\" text=\"The solution with initial value 2\"\/> <annotation ref=\"solution-k=3\" text=\"The solution with initial value 3\"\/> <annotation ref=\"solution-k=4\" text=\"The solution with initial value 4\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-unity",
  "level": "2",
  "url": "sec-repeat.html#diagram-unity",
  "type": "Figure",
  "number": "4.1.3",
  "title": "",
  "body": "    The roots of unity.  "
},
{
  "id": "listing-unity",
  "level": "2",
  "url": "sec-repeat.html#listing-unity",
  "type": "Listing",
  "number": "4.1.4",
  "title": "",
  "body": "  <diagram width=\"300\" height=\"300\" margins=\"5\"> <definition> alignments=['ne','ne','ne','nw','nw','sw','se','se'] <\/definition> <definition substitution=\"no\"> labels=['1','\\omega','i','\\omega^3','-1','\\omega^5','-i','\\omega^7'] <\/definition> <definition>f(t)=(cos(pi*t\/4),sin(pi*t\/4))<\/definition> <coordinates bbox=\"[-1.4,-1.4,1.4,1.4]\"> <grid at=\"grid\" \/> <axes at=\"axes\" labels=\"no\" \/> <circle at=\"unit-circle\" center=\"(0,0)\" radius=\"1\" stroke=\"blue\"\/> <repeat parameter=\"k=0..7\"> <point at=\"point\" p=\"f(k)\" alignment=\"alignments[k]\"> <m>${labels[k]}<\/m> <\/point> <\/repeat> <\/coordinates> <annotations> <annotation id=\"figure\" text=\"The eighth roots of unity\"> <annotation id=\"axes\" text=\"The coordinate axes\" \/> <annotation id=\"grid\" text=\"The coordinate grid\" \/> <annotation id=\"unit-circle\" text=\"The unit circle\" circular=\"true\"> <annotation id=\"point-k=0\" text=\"The primitive eighth root of unity to the power zero\" speech=\"one\"\/> <annotation id=\"point-k=1\" text=\"The primitive eighth root of unity\" speech=\"omega\"\/> <annotation id=\"point-k=2\" text=\"The primitive eighth root of unity squared\" speech=\"i\"\/> <annotation id=\"point-k=3\" text=\"The primitive eighth root of unity cubed\" speech=\"omega cubed\"\/> <annotation id=\"point-k=4\" text=\"The primitive eighth root of unity to the fourth\" speech=\"minus one\"\/> <annotation id=\"point-k=5\" text=\"The primitive eighth root of unity to the fifth\" speech=\"omega to the fifth\"\/> <annotation id=\"point-k=6\" text=\"The primitive eighth root of unity to the sixth\" speech=\"minus i\"\/> <annotation id=\"point-k=7\" text=\"The primitive eighth root of unity to the seventh\" speech=\"omega to the seventh\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-nested-repeat",
  "level": "2",
  "url": "sec-repeat.html#diagram-nested-repeat",
  "type": "Figure",
  "number": "4.1.5",
  "title": "",
  "body": "    A <repeat> nested inside another.  "
},
{
  "id": "listing-nested-repeat",
  "level": "2",
  "url": "sec-repeat.html#listing-nested-repeat",
  "type": "Listing",
  "number": "4.1.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"[-1,-1,5,5]\"> <grid\/> <repeat parameter=\"row=0..4\"> <repeat parameter=\"col=0..4\"> <rectangle at=\"rectangle\" center=\"(col, row)\" dimensions=\"(3\/4,3\/4)\" fill=\"blue\"\/> <\/repeat> <\/repeat> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-publication",
  "level": "1",
  "url": "sec-publication.html",
  "type": "Section",
  "number": "4.2",
  "title": "The publication file",
  "body": " The publication file  When illustrating a large project such as a book, you will likely want to create diagrams that have a consistent style. PreFigure constructs some components with default values for the attributes. For instance, a <graph> is stroked blue by default and a <point> is filled red. You may, however, wish to change these default behaviors with a publication file, as shown in     <prefigure> <graph stroke=\"green\"\/> <point style=\"diamond\" size=\"5\" fill=\"blue\" outline=\"yes\"\/> <macros> \\newcommand{\\deriv}[2]{\\displaystyle \\frac{d#1}{d#2}} \\newcommand{\\real}{\\Bbb R} <\/macros> <\/prefigure>   A sample publication file   The publication file begins with a <prefigure> element whose children describe desired default behaviors for a few graphical components. For instance, this publication file asks that a <graph> be stroked green and that a <point> has a few default attributes. Notice that the publication file also includes a list of latex macros, given in the <macros> element, that can be used in labels.  To illustrate, contains a diagram created using this publication file with showing the PreFigure source.      A diagram created using the publication file in     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=exp(x\/3)*cos(x)<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <grid-axes ylabel=\"\\real^2\"\/> <graph function=\"f\"\/> <repeat parameter=\"k=-3..3\"> <point p=\"(k,f(k))\"\/> <\/repeat> <label p=\"(2,2)\" clear-background=\"yes\"> <m>\\deriv{y}{x}<\/m> <\/label> <point p=\"(-2,2)\" fill=\"red\" size=\"4\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Because the publication file sets the stroke attribute of <graph> to be green, the graph of the function is stroked green by default. The <point> s on the graph are also created using the attributes given in the publication file. Notice that any attributes given in one of these tags, such as the <point> that is filled red, take precedence over the values in the publication file. This example also demonstrates the use of latex macros in the labels.  To apply the publication file pub_file.xml to a diagram, use the -p switch when compiling: prefig build -p pub_file.xml foo.xml   A good way to get started using a publication file for a large project is to say prefig new which has the effect of copying an empty publication pf_publication.xml and the diagcess tools into the current directory. If you do not specify a publication file in a build command, PreFigure will look for a pf_publication.xml in the current directory or a parent directory. To disable the use of any publication file, use the -i or --ignore_publication flag with the build command: prefig build -i foo.xml   "
},
{
  "id": "listing-pub-file",
  "level": "2",
  "url": "sec-publication.html#listing-pub-file",
  "type": "Listing",
  "number": "4.2.1",
  "title": "",
  "body": "  <prefigure> <graph stroke=\"green\"\/> <point style=\"diamond\" size=\"5\" fill=\"blue\" outline=\"yes\"\/> <macros> \\newcommand{\\deriv}[2]{\\displaystyle \\frac{d#1}{d#2}} \\newcommand{\\real}{\\Bbb R} <\/macros> <\/prefigure>   A sample publication file  "
},
{
  "id": "diagram-publication",
  "level": "2",
  "url": "sec-publication.html#diagram-publication",
  "type": "Figure",
  "number": "4.2.2",
  "title": "",
  "body": "    A diagram created using the publication file in  "
},
{
  "id": "listing-publication",
  "level": "2",
  "url": "sec-publication.html#listing-publication",
  "type": "Listing",
  "number": "4.2.3",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=exp(x\/3)*cos(x)<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <grid-axes ylabel=\"\\real^2\"\/> <graph function=\"f\"\/> <repeat parameter=\"k=-3..3\"> <point p=\"(k,f(k))\"\/> <\/repeat> <label p=\"(2,2)\" clear-background=\"yes\"> <m>\\deriv{y}{x}<\/m> <\/label> <point p=\"(-2,2)\" fill=\"red\" size=\"4\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-arrows",
  "level": "1",
  "url": "sec-arrows.html",
  "type": "Section",
  "number": "4.3",
  "title": "Arrows",
  "body": " Arrows  Arrows can appear in many different contexts within a PreFigure diagram. For instance, a <vector> will be drawn with an arrowhead, usually at its tip, as seen in . Most graphical components that define a path, such as a <polygon> and <parametric-curve> , can be decorated with arrows.      Arrows that decorate vectors.   In constrast, a <slope-field> may have many arrows, one on the end of each line segment, as shown in .      Adapted from Tom Judson's Ordinary Differential Equations Project .   As a result, it is possible to adjust the relative size and shape of arrowheads. Before describing the possibilities, however, it is important to recognize that the size of arrowheads is scaled by the thickness attribute so, for instance, the arrowhead on a line whose thickness=3 will be three times the size as one on a line whose thickness=1 .   shows a variety of choices for defining the appearance of arrowheads. Notice that there are two attributes, arrow-width and arrow-angles , that can be specified and that are described more fully below.      A collection of arrows demonstrating various options.     <diagram dimensions=\"(400,400)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes labels=\"no\"\/> <!-- left side arrows --> <line endpoints=\"((1,9),(4,9))\" arrows=\"2\"\/> <line endpoints=\"((1,8),(4,8))\" arrows=\"2\" arrow-width=\"5\"\/> <line endpoints=\"((1,7),(4,7))\" arrows=\"2\" arrow-width=\"6\"\/> <line endpoints=\"((1,6),(4,6))\" arrows=\"2\" arrow-width=\"7\"\/> <line endpoints=\"((1,5),(4,5))\" arrows=\"2\" arrow-width=\"8\"\/> <line endpoints=\"((1,4),(4,4))\" arrows=\"2\" arrow-width=\"9\"\/> <!-- right side arrows --> <line endpoints=\"((6,9),(9,9))\" arrows=\"2\" arrow-width=\"5\" arrow-angles=\"(35,60)\"\/> <line endpoints=\"((6,8),(9,8))\" arrows=\"2\" arrow-width=\"5\" arrow-angles=\"(40,60)\"\/> <line endpoints=\"((6,7),(9,7))\" arrows=\"2\" arrow-width=\"6\" arrow-angles=\"(45,60)\"\/> <line endpoints=\"((6,6),(9,6))\" arrows=\"2\" arrow-width=\"7\" arrow-angles=\"(35,80)\"\/> <line endpoints=\"((6,5),(9,5))\" arrows=\"2\" arrow-width=\"8\" arrow-angles=\"(40,80)\"\/> <line endpoints=\"((6,4),(9,4))\" stroke=\"red\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(40,80)\"\/> <!-- longer line at the bottom --> <line endpoints=\"((1,3),(9,3))\" arrows=\"2\" additional-arrows=\"(0.7,0.5)\" arrow-width=\"9\" arrow-angles=\"(60,90)\"\/> <line endpoints=\"((1,2),(9,2))\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(30,80)\"\/> <line endpoints=\"((1,1),(9,1))\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(10,90)\" additional-arrows=\"0.5\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Notice that a <line> has an additional-arrows attribute that allows one to include arrowheads at various locations along the line. The locations are given as a number between 0 and 1 specifying the relative distance along the line segment.  The shape of an arrowhead and how it is attached to the end of a path is shown in . Once again, the size of the arrowhead is scaled by the thickness of the path. (This style of arrowhead is adapted from Bill Casselman's PiScript package.)      The shape of an arrowhead and its attachment to the path.   shows the meaning of the angle-width and angle-angles attributes. The angle-width , whose value is in SVG coordinates and whose default is 4, controls how far from the path the arrowhead extends. The angle-angles attribute is a pair of angles , given in degrees. The default values are .      The definitions of arrow-width=w and arrow-angles=(A,B) .   Defining these attributes in a publication file allows them to be applied to all the diagrams in a project.  As we will see later, these attributes are ignored when placing arrowheads in a tactile diagram since the shape of the arrowheads is a convention within the braille community.  "
},
{
  "id": "diagram-arrows-vector",
  "level": "2",
  "url": "sec-arrows.html#diagram-arrows-vector",
  "type": "Figure",
  "number": "4.3.1",
  "title": "",
  "body": "    Arrows that decorate vectors.  "
},
{
  "id": "diagram-arrows-slope",
  "level": "2",
  "url": "sec-arrows.html#diagram-arrows-slope",
  "type": "Figure",
  "number": "4.3.2",
  "title": "",
  "body": "    Adapted from Tom Judson's Ordinary Differential Equations Project .  "
},
{
  "id": "diagram-arrow-properties",
  "level": "2",
  "url": "sec-arrows.html#diagram-arrow-properties",
  "type": "Figure",
  "number": "4.3.3",
  "title": "",
  "body": "    A collection of arrows demonstrating various options.  "
},
{
  "id": "listing-arrow-properties",
  "level": "2",
  "url": "sec-arrows.html#listing-arrow-properties",
  "type": "Listing",
  "number": "4.3.4",
  "title": "",
  "body": "  <diagram dimensions=\"(400,400)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes labels=\"no\"\/> <!-- left side arrows --> <line endpoints=\"((1,9),(4,9))\" arrows=\"2\"\/> <line endpoints=\"((1,8),(4,8))\" arrows=\"2\" arrow-width=\"5\"\/> <line endpoints=\"((1,7),(4,7))\" arrows=\"2\" arrow-width=\"6\"\/> <line endpoints=\"((1,6),(4,6))\" arrows=\"2\" arrow-width=\"7\"\/> <line endpoints=\"((1,5),(4,5))\" arrows=\"2\" arrow-width=\"8\"\/> <line endpoints=\"((1,4),(4,4))\" arrows=\"2\" arrow-width=\"9\"\/> <!-- right side arrows --> <line endpoints=\"((6,9),(9,9))\" arrows=\"2\" arrow-width=\"5\" arrow-angles=\"(35,60)\"\/> <line endpoints=\"((6,8),(9,8))\" arrows=\"2\" arrow-width=\"5\" arrow-angles=\"(40,60)\"\/> <line endpoints=\"((6,7),(9,7))\" arrows=\"2\" arrow-width=\"6\" arrow-angles=\"(45,60)\"\/> <line endpoints=\"((6,6),(9,6))\" arrows=\"2\" arrow-width=\"7\" arrow-angles=\"(35,80)\"\/> <line endpoints=\"((6,5),(9,5))\" arrows=\"2\" arrow-width=\"8\" arrow-angles=\"(40,80)\"\/> <line endpoints=\"((6,4),(9,4))\" stroke=\"red\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(40,80)\"\/> <!-- longer line at the bottom --> <line endpoints=\"((1,3),(9,3))\" arrows=\"2\" additional-arrows=\"(0.7,0.5)\" arrow-width=\"9\" arrow-angles=\"(60,90)\"\/> <line endpoints=\"((1,2),(9,2))\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(30,80)\"\/> <line endpoints=\"((1,1),(9,1))\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(10,90)\" additional-arrows=\"0.5\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-arrow-defs",
  "level": "2",
  "url": "sec-arrows.html#diagram-arrow-defs",
  "type": "Figure",
  "number": "4.3.5",
  "title": "",
  "body": "    The shape of an arrowhead and its attachment to the path.  "
},
{
  "id": "diagram-arrow-angle-def",
  "level": "2",
  "url": "sec-arrows.html#diagram-arrow-angle-def",
  "type": "Figure",
  "number": "4.3.6",
  "title": "",
  "body": "    The definitions of arrow-width=w and arrow-angles=(A,B) .  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This work was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
