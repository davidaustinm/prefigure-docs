var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
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
  "body": " Accessibility  PreFigure prioritizes the creation of accessible mathematical diagrams. In particular, authors can easily include annotations that control how a reader can navigate a diagram using a screen reader.      An annotated version of    (To be implemented) A reader may explore using a screen reader by first sending the focus to the diagram by either clicking in the diagram or pressing the tab key sufficiently many times. The arrow keys are then used to explore the diagram in more detail. For instance, the Down and Up arrow keys produce more or less detail while the Left and Right arrow keys focus on components at the same level. The annotations are read using the diagcess library created by Volker Sorge .  The modifications to the PreFigure source needed to produce the annotations are shown in .    <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x) = exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph at=\"graph\" function='f' \/> <tangent-line at=\"tangent\" function=\"f\" point=\"a\"\/> <point at=\"point\" p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"The graph of a function and its tangent line at the point a equals 1\"> <annotation ref=\"graph-tangent\" text=\"The graph and its tangent line\"> <annotation ref=\"graph\" text=\"The graph of the function f\" sonify=\"yes\"\/> <annotation ref=\"point\" text=\"The point a comma f of a\"\/> <annotation ref=\"tangent\" text=\"The tangent line to the graph of f at the point\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for the annotated diagram   Notice that important graphical components are given an at attribute, which serves as a handle to be used by the annotations. The <annotations> element contains a tree of <annotations> whose structure specifies how the screen reader will respond to arrow presses. An <annotation> element contains a reference to the handle of a graphical component, which specifies how the components are highlighted.  Furthermore, as seen in authors can create, from the same XML source, tactile versions of diagrams, including braille labels, suitable for embossing and including in a braille document.      A tactile version produced from the XML source in .   Indeed, the difficulty in creating tactile diagrams that emboss well was one of the original motivations of the PreFigure project.  "
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
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x) = exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph at=\"graph\" function='f' \/> <tangent-line at=\"tangent\" function=\"f\" point=\"a\"\/> <point at=\"point\" p=\"(a, f(a))\"> <m>(a,f(a))<\/m> <\/point> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"The graph of a function and its tangent line at the point a equals 1\"> <annotation ref=\"graph-tangent\" text=\"The graph and its tangent line\"> <annotation ref=\"graph\" text=\"The graph of the function f\" sonify=\"yes\"\/> <annotation ref=\"point\" text=\"The point a comma f of a\"\/> <annotation ref=\"tangent\" text=\"The tangent line to the graph of f at the point\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for the annotated diagram  "
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
  "body": " Installation and use  PreFigure may be used in two different ways.   PreFigure is available in a GitHub Codespace. For many users, this will be a convenient way to create figures since it provides a fully configured authoring environment. More information is available at that link.    PreFigure may also be installed as a Python package on your own machine. There are, however, a few additional steps required so be sure to follow the instructions given here.      From a codespace or once installed, PreFigure can be called from the command line. General help is available with  prefig --help    and help for specific commands can be found with, for instance, prefig build --help .  These are the available PreFigure commands:  build  To compile a PreFigure source file foo.xml into a diagram, use either prefig build foo.xml prefig build -f tactile foo.xml where the second command builds a tactile version. In either case, the output image will appear in output\/foo.svg while annotations read by a screen reader are in output\/foo.xml . If PreFigure is called from within PreTeXt , then the annotations will appear in foo-annotations.xml .   view  Once an image is built, it may be viewed in a web browser with prefig view foo If the diagram contains annotations, this will provide a means of exploring the diagram and annotations using the diagcess library. To view the diagram without annotations, use prefig view -i foo to ignore the annotations.  The view command offers some flexibility since the PreFigure source and the SVG output appear in different directories. For instance, if the PreFigure source appears in, say, examples\/tangent.xml , we can use prefig build examples\/tangent.xml prefig view tangent PreFigure looks for tangent.svg in the current directory or some subdirectory. Alternatively, you could say prefig view examples\/tangent.xml    pdf  To make a PDF from a diagram that has already been built, use prefig pdf foo Including the -b flag will cause the diagram to be built first: prefig pdf -b foo .  Use of prefig pdf assumes that rsvg-convert is installed, which it provided in a codespace. The use of rsvg-convert ensures that tactile diagrams are well suited for embossing. There are options for choosing the resolution of the resulting PDF, but tactile diagrams should always be converted with a resolution of 72 dpi, which is the default.   png  To make a PNG from a diagram that has already been built, use prefig png foo Including the -b flag will cause the diagram to be built first: prefig pdf -b foo .   init  It is not essential to do this, but if PreFigure is installed locally, you may want to begin with prefig init , which has the effect of installing some MathJax libraries (PreFigure will try to install these later when needed) as well as the Braille29 font, which is required to create tactile diagrams for embossing.   new  You may initialize a new PreFigure project with prefig new . This copies a simple publication file and the diagcess library files into the current directory. PreFigure work done within this directory and any subdirectories will be able to find these when needed.   examples  If you would like to explore the set of included examples, use prefig examples to copy the set of examples into the current directory.     "
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
  "body": " The <coordinates> element  Once the dimensions of the diagram are established in the opening <diagram> element, there is a default coordinate system provided. For instance, if we begin with <diagram\n    dimensions=\"(300, 200)\" margins=\"10\"> , we obtain a coordinate system as shown in .      The default coordinate system   Some authors may know that SVG's internal coordinate system places the origin in the upper-left corner of the image and the positive -axis points down. PreFigure, however, encourages authors to think mathematically so that all graphical components are described in terms of a mathematical coordinate system, such as that shown in . PreFigure will handle the necessary coordinate transforms between mathematical coordinates and SVG's internal coordinate system.  It is possible to describe diagrams using the default coordinate system seen in . More likely, however, an author intends us to view a specific region in the Cartesian plane. The <coordinates> element allows us to set a mathematical bounding box that lies over the drawing surface. For instance, <coordinates bbox=\"(-3,-2,9,6)\"> results in the coordinate system shown in . Any elements placed under this <coordinates> element will be drawn in this coordinate system.      A mathematical coordinate system defined using a < coordinates> element   This use of <coordinates> is possibly all you will ever use. However, a <coordinates> element can be given a destination attribute that describes a region inside the current bounding box where the new bounding box should reside. For example, the PreFigure source in produces two rectangles placed side by side as seen in     <diagram dimensions=\"(410, 200)\" margins=\"5\"> <coordinates bbox=\"(0,0,1,1)\" destination=\"(0,0,200,200)\"> <rectangle lower-left=\"(0,0)\" dimensions=\"(1,1)\" fill=\"blue\"\/> <\/coordinates> <coordinates bbox=\"(0,0,1,1)\" destination=\"(210,0,410,200)\"> <rectangle lower-left=\"(0,0)\" dimensions=\"(1,1)\" fill=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for        The use of two coordinate systems   There are some appropriate applications of this construction, such as diagrams that describe functions from the plane to the plane as you might see in linear algebra or complex analysis. However, this use of <coordinates> is generally discouraged. If you intend to place two, possibly related diagrams side by side in a PreTeXt document, you should create two separate diagrams and place them next to each other using a <sidebyside> . This is particularly important for the production of braille documents from PreTeXt source.  A second, possibly more legitimate, use of <coordinates> elements is to nest one inside another. For instance, we may wish to zoom in on a region in the diagram, as shown in       Using coordinate systems to zoom   The PreFigure source is given in . The background coordinate system is established by the <coordinate> element in Line 5. Then we include a few graphical components, such as the graph, tangent line, and point, drawn in that coordinate system. Then a second, nested <coordinate> element appears in Line 12 and we draw the graph, tangent line, and point again in the new coordinate system.    <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=3-x^2\/2<\/definition> <definition>a=1<\/definition> <definition>side=0.5<\/definition> <coordinates bbox=\"(0,0,4,4)\"> <grid-axes decorations=\"no\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a,f(a))\"\/> <rectangle center=\"(a,f(a))\" dimensions=\"(side, side)\" stroke=\"gray\"\/> <coordinates bbox=\"(a-side\/2,f(a)-side\/2,a+side\/2,f(a)+side\/2)\" destination=\"(2.25,2.25,3.75,3.75)\"> <rectangle center=\"(a,f(a))\" dimensions=\"(side, side)\" stroke=\"gray\" fill=\"white\"\/> <graph function=\"f\"\/> <tangent-line function=\"f\" point=\"a\"\/> <point p=\"(a,f(a))\"\/> <\/coordinates> <\/coordinates> <\/diagram>   The PreFigure source for    The <coordinates> tag enables authors to specify the diagram's aspect ratio using the aspect-ratio attribute. For example, if the aspect ratio is not 1, then a <circle> will appear as an ellipse and a right angle will not appear to be . demonstrates the use of aspect-ratio .      Use of the aspect-ratio attribute     <diagram dimensions=\"(300,270)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\" aspect-ratio=\"1\"> <grid-axes decorations=\"no\"\/> <circle center=\"(2,2)\" radius=\"1.5\" stroke=\"blue\"\/> <definition>vertices=((4,4), (8,1),(7,8))<\/definition> <triangle vertices=\"vertices\" labels=\"D,E,F\" angle-markers=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for    Notice that the height of the diagram is 90% of the width though the <cooordinates> tag sets a mathematical bounding box having the same width and height. By specifying that aspect-ratio=\"1\" , we request that the scales in horizontal and vertical directions be equal.  More generally, the aspect ratio sets the ratio of the horizontal to the vertical scale. For instance, setting aspect-ratio=\"2\" means that moving one SVG coordinate to the right moves us twice as far mathematically compared to moving one SVG coordinate up.  By default, the horizontal extent of the mathematical bounding box is preserved and the vertical extent is adjusted according to the aspect ratio. The result is that the vertical extent of resulting bounding box in is . Use preserve-y-range=\"yes\" to preserve the vertical extent of the given bounding box instead.  "
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
  "id": "diagram-triangle",
  "level": "2",
  "url": "sec-coordinates.html#diagram-triangle",
  "type": "Figure",
  "number": "2.2.7",
  "title": "",
  "body": "    Use of the aspect-ratio attribute  "
},
{
  "id": "listing-triangle",
  "level": "2",
  "url": "sec-coordinates.html#listing-triangle",
  "type": "Listing",
  "number": "2.2.8",
  "title": "",
  "body": "  <diagram dimensions=\"(300,270)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\" aspect-ratio=\"1\"> <grid-axes decorations=\"no\"\/> <circle center=\"(2,2)\" radius=\"1.5\" stroke=\"blue\"\/> <definition>vertices=((4,4), (8,1),(7,8))<\/definition> <triangle vertices=\"vertices\" labels=\"D,E,F\" angle-markers=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for   "
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
  "title": "Stroke, fill, and other graphical attributes",
  "body": " Stroke, fill, and other graphical attributes   We begin this chapter with a discussion of attributes common to all graphical elements. Many attributes modify properties that are either - or -dimensional. For instance, a <graph> will consist of a curve with an attribute stroke that determines its color. A <polygon> also has a stroke attribute that determines the color of the boundary of the polygon. It also has a fill attribute that determines the color used to shade the -dimensional region enclosed by the <polygon> .    Colors  There are several ways to specify a color, the most simple being to use its name, such as stroke=\"blue\" . Alternatively, one may specify the red, green, and blue components either in hexadecimal, fill=\"#rrggbb\" or fill=\"#rgb\" , or decimal, fill=\"rgb(r,g,b)\" , where each value is between 0 and 255. Some examples are shown in .      Some color choices   Color should be used judiciously, and the colors used in a single diagram should contrast highly with one another. If you find that you are using a lot of colors, perhaps the idea you are communicating could be better expressed in another way, such as a series of linked diagrams.    Stroke attributes  The two most important attributes you will use are stroke and thickness . All the possible stroke attributes are described here roughly in order of importance. You will likely never need the attributes toward the end of this list.   Stroke  The stroke attribute determines the color used to draw -dimensional components, as demonstrated in . For instance, stroke=\"blue\" will cause the -dimensional component of the element to be rendered in blue. If the attribute has the value stroke=\"none\" , then the -dimensional component of the element will not appear.  Note that tactile diagrams are rendered with stroke=\"black\" to guarantee predictable behavior when embossed.   Thickness  The attribute thickness determines the width of the -dimensional component in SVG coordinates. That is, if a graphical element has the attribute thickiness=\"1\" in a diagram whose dimensions are , then the width of the corresponding graphical component will be of size of the diagram. demonstrates different thicknesses.      Stroking with various thicknesses    Many graphical elements, such as graph and lines, have a default @thickness=2 .  Dash  Use the dash attribute to create dashed lines as shown in .      Dashed lines   In a tactile diagram, the dash attribute is useful for distinguishing different graphical components. Feedback from users indicates that dash=\"9 9\" is a good choice as the dashes and spaces are of an inch.   Opacity  Transparency is available using the opacity attribute. The value should be between 0.0 and 1.0 with 1.0, the default, being entirely opaque. This attribute applied to both the stroke and fill of a graphical component. If the opacity is meant to be applied to only the stroke, use stroke-opacity .      These lines have stroke=\"blue\" and varying opacities    Miterlimit  On rare occasions, you may find that you need to adjust the miterlimit attribute. As seen in , it sometimes happens that a small angle produces a sharp point. The point can be removed by lowering the miterlimit attribute from its default value of 4.      Lowering the miterlimit causes sharp points to be blunted    Linejoin  The linejoin attribute determines how lines are joined. The default value is linejoin=\"miter\" , whose behavior is controlled with the miterlimit attribute described above. However, this can be changed as shown in .      Various choices for the linejoin attribute    Linecap  The linecap attribute determines how lines are capped at their ends. The default value is linecap=\"butt\" with the other options shown in . The option linecap=\"square\" causes a square to added to the end of the line, which extends it slightly.      Options for linecap       Fill attributes  Similarly, there are a few attributes to describe the properties used to fill a region.   Fill  The fill specifies the color used to fill a region, as seen in .      Squares filled with fill=\"red\" , blue, and green.   Tactile diagrams are rendered with fill=\"lightgray\" to create a consistent texture.   Fill opacity  The fill-opacity attribute provides a given degree of transparency, as demonstrated in .      Squares filled with fill-opacity=\"1.0\" , 0.6, and 0.2.    Fill rule  The fill-rule attribute determines how more complicated regions are filled, as demonstrated in .      Shapes filled with fill-rule=\"nonzero\" , the default, and evenodd.       Handles  In , we described how graphical elements can have an identifying handle, given by the value of its at attribute, by which they may be referenced from within an annotation. For instance, at=\"function-f\" provides an identification of this graphical element.  If you look inside an SVG image file created by PreFigure, you will see that the handles are converted into id attributes, and it is perfectly fine to use id=\"function-f\" rather than the at attribute. The at attribute is provided to avoid any confusion with xml:id attributes.  As we now begin to describe different types of graphical components, we will occasionally need to describe how a component's handle is processed.   "
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
  "body": "    Shapes filled with fill-rule=\"nonzero\" , the default, and evenodd.  "
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
  "body": " Grid and Axes   We'll begin our discussion of graphical elements by looking at grids and axes, which will typically be in the background of a diagram. Since these are commonly used elements, there are many features that can be customized by an author.    <grid-axes>  The simplest way to include a grid and axes in a diagram is with the <grid-axes> element, which is demonstrated in .      The use of a <grid-axes> element.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-2,-2,5,5)\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Notice that PreFigure makes choices about the spacing of the grid lines and the locations at which labels are added to the axes. All of these features can be modified as will be described in the next two subsections, and .  To place the grid lines and label locations at multiples of , add the attributes h-pi-format=\"yes\" or v-pi-format=\"yes\" , as illustrated in . These attributes may be individually applied to a <grid> or <axes> element.      The use of h-pi-format and v-pi-format attributes.     <diagram dimensions=\"(300,250)\" margins=\"(30,5,5,5)\"> <coordinates bbox=\"(-pi, -pi, 10*pi, pi)\"> <definition>f(x)=2*cos(x\/4-1)<\/definition> <grid-axes h-pi-format=\"yes\" v-pi-format=\"yes\"\/> <graph function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   The xlabel and ylabel tags are optional but provide a simple way to label the axes. We will have a lot more to say about labels later, but these particular labels will be processed by MathJax as if they were contained in an m element.  We will also discuss annotations in more depth later, but it is worth mentioning now that a <grid-axes> element will automatically annotate itself as the first component in the annotation tree.    Grids  The <grid> element provides a grid without adding axes. Without any attributes, this element will choose horizontal and vertical spacings and draw the grid lines stroke=\"lightgray\" and thickness=\"1\" . The stroke attributes can be modified as can the spacings using the spacings attribute. The value of the spacings consists of two lists, one for each of the horizontal and vertical grid lines, with each list having the form (start, space, end) . provides an example.      The attributes of a <grid> element.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid spacings=\"((0,1,10),(0,1\/2,10))\" stroke=\"blue\" thickness=\"2\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Including a basis attribute will produce a grid drawn in the given basis, as shown in .      The result of basis=\"((2,1),(1,2))\" .   When included in a <grid-axes> element, these attributes will be inherited by the resulting grid.    Axes  Axes are a bit more involved since there is a wider range of properties they possess. For instance, an <axes> tag with no attributes will produce axes similar to those seen in . In addition to the axes, we see that there are tick marks and labels as well. The positions of the tick marks and labels are automatically generated.      An <axes> element without attributes.   There are attributes that may be used to change this default behavior.  decorations  Setting decorations=\"no\" suppresses the automatic inclusion of tick marks and labels and produces unadorned axes. Regardless of the value of this attribute, features may be customized and added to the axes by including some of the following attributes.   xlabel and ylabel  As we have seen xlabel=\"t\" and ylabel=\"f(t)\" will place labels on the horizontal and vertical axes. These labels will be automatically wrapped in <m> elements and processed as latex by MathJax.   hticks and vticks  These attributes specify the position of tick marks on the axes. For instance, hticks=\"(-2,2,4)\" will place tick marks on the horizontal axis beginning at -2 and ending at 4 with a spacing of two units.   hlabels and vlabels  These attributes are similar to hticks and vticks except they specify the position of labels on the axes.   arrows  Arrows may be placed on ends of the axes by setting the arrows attribute. If arrows=\"1\" , then arrows will be included in the direction of increasing coordinates. arrows=\"2\" includes arrows at each end of the axes.     illustrates the use of some of these attributes.      The effect of some attributes of an <axes> element.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-2,-2,5,5)\"> <axes xlabel=\"\\alpha\" ylabel=\"g(\\alpha)\" hticks=\"(-2,1,5)\" hlabels=\"(-2,1,5)\" arrows=\"1\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   As with grids, these attributes may be included in a <grid-axes> element and inherited by the resulting axes.   "
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
  "id": "diagram-pi-format",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-pi-format",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": "    The use of h-pi-format and v-pi-format attributes.  "
},
{
  "id": "subsec-grid-axes-8",
  "level": "2",
  "url": "sec-grid-axes.html#subsec-grid-axes-8",
  "type": "Listing",
  "number": "3.3.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,250)\" margins=\"(30,5,5,5)\"> <coordinates bbox=\"(-pi, -pi, 10*pi, pi)\"> <definition>f(x)=2*cos(x\/4-1)<\/definition> <grid-axes h-pi-format=\"yes\" v-pi-format=\"yes\"\/> <graph function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-grid",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-grid",
  "type": "Figure",
  "number": "3.3.5",
  "title": "",
  "body": "    The attributes of a <grid> element.  "
},
{
  "id": "subsec-grid-4",
  "level": "2",
  "url": "sec-grid-axes.html#subsec-grid-4",
  "type": "Listing",
  "number": "3.3.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid spacings=\"((0,1,10),(0,1\/2,10))\" stroke=\"blue\" thickness=\"2\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-grid-basis",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-grid-basis",
  "type": "Figure",
  "number": "3.3.7",
  "title": "",
  "body": "    The result of basis=\"((2,1),(1,2))\" .  "
},
{
  "id": "diagram-axes",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-axes",
  "type": "Figure",
  "number": "3.3.8",
  "title": "",
  "body": "    An <axes> element without attributes.  "
},
{
  "id": "diagram-axes-example",
  "level": "2",
  "url": "sec-grid-axes.html#diagram-axes-example",
  "type": "Figure",
  "number": "3.3.9",
  "title": "",
  "body": "    The effect of some attributes of an <axes> element.  "
},
{
  "id": "subsec-axes-7",
  "level": "2",
  "url": "sec-grid-axes.html#subsec-axes-7",
  "type": "Listing",
  "number": "3.3.10",
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
  "body": " Points, lines, and polygons   In this section, we will begin to introduce some simple graphical components, such as points, lines, vectors, and polygons.    Points  shows a collection of points and various attributes describing them. The PreFigure source follows in .      A collection of points.     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(0, 0,5, 5)\"> <point p=\"(1,4)\" size=\"20\" style=\"box\" fill=\"green\" stroke=\"black\" thickness=\"4\"\/> <point p=\"(2.5, 2.5)\" size=\"15\" style=\"diamond\" fill=\"blue\" stroke=\"none\"\/> <point p=\"(3,1)\" size=\"10\"> <m>(a,(f(a))<\/m> <\/point> <point p=\"(1,1)\" style=\"cross\" thickness=\"3\"\/> <point p=\"(4,4)\" style=\"plus\" thickness=\"3\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   In the usual way, a point will have stroke and fill attributes. There are additional attributes that specify its appearance.  p  The p gives the location at which the point will be centered.   style  This attribute controls the shape of the point. There are five options: style=\"box\", \"diamond\", \"circle\", \"cross\", \"plus\" with \"circle\" being the default.   size  This attribute specifies the size of the point in SVG units.     Notice that a label may be attached to a point by including the label's text within the <point> element. In this case, attributes may be added to the point, such as alignment and offset , to control the positioning of the label. Behind the scenes, the label and point are placed within a <group> element, and the point's handle transferred to the <group> for annotating.    Lines  A few lines are shown in with the PreFigure source presented in . Please note that a <vector> element can be used for including vectors in a diagram, as explained in .      A collection of lines.     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,5)\"> <grid\/> <line endpoints=\"((1,4), (4,4.5))\" stroke=\"blue\" thickness=\"5\" arrows=\"1\"\/> <line p1=\"(1,3)\" p2=\"(4,2.5)\" stroke=\"lightgray\" thickness=\"20\"\/> <line p1=\"(1,3)\" p2=\"(4,2.5)\" endpoint-offsets=\"(10, -5)\" thickness=\"5\"\/> <line endpoints=\"((1,1.5),(4,2))\" stroke=\"green\" infinite=\"yes\"\/> <definition>p1=(1,1)<\/definition> <definition>p2=(4.5,0.5)<\/definition> <line endpoints=\"(p1,p2)\" endpoint-offsets=\"((10,0), (-10,0))\"\/> <label p=\"p1\" clear-background=\"yes\"><m>a<\/m><\/label> <label p=\"p2\" clear-background=\"yes\"><m>b<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for .   It is important to remember that lines, along with the other components introduced in this and later sections, support the graphical attributes explained in . In particular, any stroke attributes can be added to a line though fill attributes do not apply.  endpoints  The endpoints of a line may be specified together using the endpoints attribute or separately using p1 and p2 .   infinite  If infinite=\"yes\" , then the line is drawn as if it were infinite in extent.   arrows  If arrows=\"1\" , then an arrow is drawn at the second endpoint. If arrows=\"2\" , then an arrow is drawn at both endpoints.   reverse  Setting reverse=\"yes\" changes the direction of the line when adding arrows.  endpoint-offsets  Sometimes you may want the line to begin or end near, but not exactly, at the given endpoints. The bottom line in is an example in that the line is connecting two labels placed at two endpoints. We move the endpoints slightly so that the line does not interfere with the label. In this case, the endpoint offsets are a pair of vectors, each of which moves an endpoint by the given vector in SVG units.  Another line in the figure shows a second use of offsets. In this case, the offsets are a single pair of SVG units. The direction of the line is preserved but each endpoint is moved along the line by the given offset. This could be helpful when drawing arrows since the arrow head will extend slightly beyond the endpoint of the line.       Vectors  In some sense, <vector> s are a redundant element since we can always draw lines and attach arrows. However, a goal of PreFigure is to facilitate authors thinking mathematically about the exposition so <vector> should be used when including a vector in a diagram. Vectors are also drawn with a default thickness that differentiates them from lines drawn with their default attributes.      A collection of vectors.     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,5,5)\"> <grid-axes decorations=\"no\"\/> <vector v=\"(3,4)\"\/> <vector v=\"(1,3\/2)\" tail=\"(2,1)\" scale=\"2\" stroke=\"blue\"\/> <vector v=\"(1,3)\" tail=\"(3.5,1)\" head-location=\"0.8\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   In addition to stroke attributes, a vector supports the following attributes.  v  The attribute v is the 2-dimensional mathematical vector.   tail  The attribute tail represents the tail of the vector.   scale  The value of scale acts as scalar multiplication on v .   head-location  Usually, the head of a vector is placed at the tip of the vector. There may be occasions, however, when you want to place the head somewhere else along the shaft. Specifying head-location=\"0.8\" places the arrow head at a location 80% of the way from the tail to the tip.       Polygons  Polygons are paths drawn by connecting a set of points by line segments. The effect is different from drawing a set of line segments, however, since the ends of the line segments will be joined to form a whole. For example, the shape on the left of is drawn with two <line> s while that on the right is a <polygon> .      Two line segments on the left and a polygon on the right.   <polygon> s are quite versatile and should more properly be thought of as a polygonal path having both stroke and fill attributes. demonstrates some possibilities with the PreFigure soure given in .      Some sample polygons.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-5,-5,5,5)\"> <grid\/> <polygon points=\"((-2,-1),(-4,-1),(-4,2))\" closed=\"yes\" fill=\"blue\"\/> <polygon points=\"(2,1)+2*(cos(k*pi\/4),sin(k*pi\/4))\" parameter=\"k=0..7\" closed=\"yes\" stroke=\"red\" thickness=\"4\"\/> <polygon points=\"((-4,4),(-1,4),(-1,-3),(3,-3))\" corner-radius=\"10\" arrows=\"1\" thickness=\"5\" stroke=\"green\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   A <polygon> requires a set of points given by the points attributes. While you may simply list the points, PreFigure also allows you to provide a rule for generating the list of points.  points  The value of the points attribute may be a list of points or a single point containing a named parameter.   parameter  The parameter attribute gives a range of values for generating the list of points. The format is parameter=\"parameter_name=start..stop\" .   closed  By default, polygons are not closed, but closed=\"yes\" will close a polygon.   arrows  To place arrows at the end of a polygonal path, use arrows=\"1\" to add an arrow at the end and arrows=\"2\" to also add an arrow at the beginning.   reverse  Setting reverse=\"yes\" changes the direction of the polygonal path when attaching arrows.  corner-radius  A polygonal path can be smoothed out using the corner-radius attribute. The value of this attribute should be a positive number of SVG units.       Triangles  For convenience, PreFigure offers a <triangle> as illustrated in .      Two triangles     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decorations=\"no\"\/> <triangle vertices=\"((1,1),(3,2),(1,5))\" labels=\"A,B,C\" show-vertices=\"yes\" point-fill=\"orange\" \/> <definition>vertices=((4,4), (8,1),(7,8))<\/definition> <triangle vertices=\"vertices\" labels=\"D,E,F\" angle-markers=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   A <triangle> has the same attributes as a <polygon> , except that the vertices are listed with the vertices attribute and the attribute closed is always set to \"yes\" for a <triangle> . There are some additional attributes of note.    labels  You may provide labels for each of the vertices by setting this attribute to a comma-separated list of three labels. Each label will be wrapped in an <m> tag and processed by MathJax.   angle-markers  Set this to \"yes\" to place an <angle-marker> in each of the interior angles.    show-vertices  This attribute will place a <point> on each vertex if set to \"yes\" .    point-fill  Use this to specify the fill of each <point> if show-vertices=\"yes\" .      "
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
  "id": "diagram-triangle-intro",
  "level": "2",
  "url": "sec-simple.html#diagram-triangle-intro",
  "type": "Figure",
  "number": "3.5.10",
  "title": "",
  "body": "    Two triangles  "
},
{
  "id": "listing-triangle-intro",
  "level": "2",
  "url": "sec-simple.html#listing-triangle-intro",
  "type": "Listing",
  "number": "3.5.11",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decorations=\"no\"\/> <triangle vertices=\"((1,1),(3,2),(1,5))\" labels=\"A,B,C\" show-vertices=\"yes\" point-fill=\"orange\" \/> <definition>vertices=((4,4), (8,1),(7,8))<\/definition> <triangle vertices=\"vertices\" labels=\"D,E,F\" angle-markers=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
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
  "body": " Differential equations   There are a few elements for creating diagrams containing solutions to differential equations.    Slope Fields  Slope fields for a 1-variable ordinary differential equation and for autonomous systems can be drawn using the <slope-field> element. On the left of is shown a slope field for the equation while the right shows the slope field for the autonomous system        The slope fields for two differential equations.   The PreFigure source input for the left diagram in is given in .    <diagram dimensions=\"(300,300)\" margins=\"10\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"t\" ylabel=\"y\"\/> <slope-field function=\"f\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the slope field of a 1-variable differential equation   The grid on which the slope field is drawn can be changed using the spacings attribute similar to that of the grid element .  To obtain the slope field for an autonomous system, include the attribute system=\"yes\" in the <slope-field> element. Also, arrows are added to the <slope-field> using the arrows=\"yes\" attribute. Notice that the function defining the differential equation is naturally vector-valued now.    <diagram dimensions=\"(300,300)\" margins=\"10\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"y_0\" ylabel=\"y_1\"\/> <slope-field function=\"f\" system=\"yes\" arrows=\"yes\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the slope field of an autonomous sytem.     Solutions to differential equations  PreFigure provides an element <de-solve> that generates and saves the solution of a differential equation. You could think of this as a definition that can be reused possibly several times.  Solutions are then plotted using the <plot-de-solution> element. demonstrates how to use these elements.      Some solutions to a differential equation.     <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes\/> <slope-field function=\"f\"\/> <de-solve function=\"f\" t0=\"0\" y0=\"3\" t1=\"4\" name=\"linear\"\/> <plot-de-solution solution=\"linear\" stroke=\"red\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"-2\" t1=\"4\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   shows two ways in which a solution to the differential equation can be plotted. In Line 5, we solve the differential equation with initial value over the interval . This interval is broken into N=100 steps by default, but this value can be modified using the N attribute. This solution is also given an attribute name=\"linear\" . To plot the solution, we use a <plot-de-solution> element in Line 7 passing the name of the solution as an attribute.  Alernatively, these two elements can be combined into a single <plot-de-solution> element, as shown in Line 8. Most likely, you will use this second method more frequently since it involves a single element.  There are more possibilities when solving a system. shows a solution to a autonomous system.      Solutions and to a system of differential equations.     <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-1,-4,6,4]\"> <grid-axes\/> <de-solve function=\"f\" t0=\"0\" t1=\"6\" y0=\"(3,0)\" name=\"oscillator\"\/> <plot-de-solution solution=\"oscillator\" axes=\"(t,y0)\"\/> <plot-de-solution solution=\"oscillator\" axes=\"(t,y1)\" stroke=\"red\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Notice how we generate a solution in Line 5 of and save it with the name=\"oscillator\" . Then we reuse this solution to plot the components and as functions of in Line 6 and 7. There are now three quantities involved, , , and , so we use the axes attribute to state which of these quantities will appear on the horizontal and vertical axis. This notation for the axes holds no matter what variables are used to define the function on the right side of the differential equation.  We can also create phase portraits as in . The source code demonstrates how a method can be supplied to the differential equation solver. Differential equations are solved numerically using a Python package that presents a choice of methods. Most of the time, the default \"RK45\" method will suffice, but \"LSODA\" may be helpful when working with stiff equations.      A few trajectories in the phase plane of an autonomous system.     <diagram dimensions=\"(300,300)\" margins=\"12\"> <definition>f(t,y) = (y[1],-y[0])<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"y_0\" ylabel=\"y_1\"\/> <slope-field function=\"f\" system=\"yes\" stroke=\"darkorange\" arrows=\"yes\"\/> <plot-de-solution function=\"f\" t0=\"0\" t1=\"2*pi\" y0=\"(1,0)\" axes=\"(y0,y1)\"\/> <plot-de-solution function=\"f\" t0=\"0\" t1=\"2*pi\" method=\"RK23\" y0=\"(2,0)\" axes=\"(y0,y1)\"\/> <plot-de-solution function=\"f\" t0=\"0\" t1=\"2*pi\" method=\"LSODA\" y0=\"(3,0)\" axes=\"(y0,y1)\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   To place an arrow at the end of a trajectory, add the attribute arrow=\"yes\" to the <plot-de-solution> element.    Discontinuities  We sometimes want to solve differential equations for which the defining function is discontinuous. Here's an example that could model an electric circuit with a switch. .  To define in such a case, we can use , the characteristic function of an interval . In PreFigure, this comes in four flavors.  chi_oo  chi_oo(a,b,t) is 1 if and 0 otherwise.   chi_oc  chi_oc(a,b,t) is 1 if and 0 otherwise.   chi_co  chi_co(a,b,t) is 1 if and 0 otherwise.   chi_cc  chi_cc(a,b,t) is 1 if and 0 otherwise.     illustrates how this could be used.      Solving a differential equation with a discontinuity.     <diagram dimensions=\"(300,300)\" margins=\"(20,5,20,25)\"> <coordinates bbox=\"[-0.5,-2,8,20]\"> <definition>f(t,y)=chi_oc(-inf,4,t)*10-y<\/definition> <grid-axes \/> <slope-field function=\"f\" arrows=\"yes\" stroke=\"gray\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"0\" t1=\"bbox[2]\" max-step=\"0.1\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"20\" t1=\"bbox[2]\" max-step=\"0.1\" stroke=\"red\"\/> <label anchor=\"(bbox[2],0)\" alignment=\"ne\" offset=\"(4,0)\"> <m>t<\/m> <\/label> <label anchor=\"(0,bbox[3])\" alignment=\"ne\"><m>y(t)<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for .   There are two additional things to note. First, inf can be used to represent , which allows us to define the interval . Second, the differential solver used by PreFigure has a hard time with discontinuities unless we specify a maximum step size for the solver to take. Notice the attribute max-step=\"0.1\" in the <plot-de-solution> elements.    Euler's method  There is a function eulers_method(f, t0, y0, t1, N) that returns the set of points that are the result of applying Euler's method with the given parameters. demonstrates.      Demonstrating Euler's method.     <diagram dimensions=\"(300,300)\" margins=\"20\"> <coordinates bbox=\"(-1,-1,10,8)\"> <definition>f(t,y) = 0.1*y*(6-y)<\/definition> <definition>N=5<\/definition> <definition>points = eulers_method(f,0,1,bbox[2],N)<\/definition> <grid-axes xlabel=\"t\" ylabel=\"y\"\/> <slope-field function=\"f\" stroke=\"cornflowerblue\"\/> <polygon points=\"points\" stroke=\"red\"\/> <repeat parameter=\"k=0..N\"> <point p=\"points[k]\"\/> <\/repeat> <\/coordinates> <\/diagram>   The PreFigure source for .    "
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
  "id": "diagram-de-pulse",
  "level": "2",
  "url": "sec-diffeqs.html#diagram-de-pulse",
  "type": "Figure",
  "number": "3.8.10",
  "title": "",
  "body": "    Solving a differential equation with a discontinuity.  "
},
{
  "id": "listing-de-pulse",
  "level": "2",
  "url": "sec-diffeqs.html#listing-de-pulse",
  "type": "Listing",
  "number": "3.8.11",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"(20,5,20,25)\"> <coordinates bbox=\"[-0.5,-2,8,20]\"> <definition>f(t,y)=chi_oc(-inf,4,t)*10-y<\/definition> <grid-axes \/> <slope-field function=\"f\" arrows=\"yes\" stroke=\"gray\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"0\" t1=\"bbox[2]\" max-step=\"0.1\"\/> <plot-de-solution function=\"f\" t0=\"0\" y0=\"20\" t1=\"bbox[2]\" max-step=\"0.1\" stroke=\"red\"\/> <label anchor=\"(bbox[2],0)\" alignment=\"ne\" offset=\"(4,0)\"> <m>t<\/m> <\/label> <label anchor=\"(0,bbox[3])\" alignment=\"ne\"><m>y(t)<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-eulers-method",
  "level": "2",
  "url": "sec-diffeqs.html#diagram-eulers-method",
  "type": "Figure",
  "number": "3.8.12",
  "title": "",
  "body": "    Demonstrating Euler's method.  "
},
{
  "id": "listing-eulers-method",
  "level": "2",
  "url": "sec-diffeqs.html#listing-eulers-method",
  "type": "Listing",
  "number": "3.8.13",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"20\"> <coordinates bbox=\"(-1,-1,10,8)\"> <definition>f(t,y) = 0.1*y*(6-y)<\/definition> <definition>N=5<\/definition> <definition>points = eulers_method(f,0,1,bbox[2],N)<\/definition> <grid-axes xlabel=\"t\" ylabel=\"y\"\/> <slope-field function=\"f\" stroke=\"cornflowerblue\"\/> <polygon points=\"points\" stroke=\"red\"\/> <repeat parameter=\"k=0..N\"> <point p=\"points[k]\"\/> <\/repeat> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-networks",
  "level": "1",
  "url": "sec-networks.html",
  "type": "Section",
  "number": "3.9",
  "title": "Networks",
  "body": " Networks   PreFigure enables authors to create diagrams of networks, such as that shown in . Mathematicians sometimes refer to these as graphs , but we will use the term network to distinguish them from graphs of functions. There is quite a bit of flexibility as will be explained in the remainder of this section.      A simple network.     Getting started  Let's begin by discussing . Notice that it is a directed network and that there are multiple edges between two of the vertices. The PreFigure source is in .    <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>graph={1:[3,4,5,5],2:[4,5],3:[4,5],6:[2,4]}<\/definition> <coordinates bbox=\"(-1,-1,1,1)\"> <network directed=\"yes\" graph=\"graph\" scale=\"0.8\" node-fill=\"#fcf\" node-stroke=\"black\" seed=\"1\" labels=\"yes\" tactile-node-size=\"40\"> <\/network> <\/coordinates> <\/diagram>   The PreFigure source for .   The network is defined by the dictionary in line 2 where each key in the dictionary defines a node in the network and the corresponding value lists the nodes connected by edges. Notice that node 1 is connected to node 5 by two edges, as seen in the diagram.  The <network> element then constructs the graphical representation of the network. There are quite a few attributes for that element so let's take a moment to consider them.  graph  The graph attribute tells PreFigure about the dictionary that defines the structure of the network.   directed  The attribute directed=\"yes\" declares this to be a directed network, which means that the edges have a direction indicated by arrows. If this attribute is set to \"no\" , which is the default, then no arrows are placed on the edges.   labels  Use labels=\"yes\" to include labels inside the nodes.   scale  The nodes will fit just inside the bounding box defined by the current coordinate system so the value of scale can be used to pull the nodes in toward the center. The default is scale=\"0.8\" .   node-fill  The node-fill attribute defines the color to use when filling the nodes. This is part of a collection of attributes that control the visual appearance of the network. Each <node> will generate a <point> so other attributes include node-stroke , node-thickness , node-size , node-style .  Similarly, an edge will generate a <path> so some path attributes can be applied, such as edge-stroke , edge-thickness , and edge-dash .   seed  The algorithm that determines the positions of the nodes uses a random seed. To ensure consistent behavior while you are developing a diagram, set the value of the seed attribute so that the nodes will stay in the same position from one compilation to the next. If you are not satisfied with the appearance of the network, you could try using a different seed.       A more verbose network  A second way of defining the same network is shown in . In this case, we do not define the structure of the network using a dictionary. Instead, we include <node> elements as children of <network> . The edges attribute for each node defines the edges connecting that node to others. . As we will see shortly, we can mix these two approaches to defining the network for more flexibility.    <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,1,1)\"> <network directed=\"yes\" scale=\"0.8\" node-fill=\"#fcf\" node-stroke=\"black\" seed=\"1\" labels=\"yes\" tactile-node-size=\"40\"> <node at=\"1\" edges=\"[3,4,5,5]\"\/> <node at=\"2\" edges=\"[4,5]\"\/> <node at=\"3\" edges=\"[4,5]\"\/> <node at=\"4\"\/> <node at=\"5\"\/> <node at=\"6\" edges=\"[2,4]\"\/> <\/network> <\/coordinates> <\/diagram>   Another PreFigure source for .     Positioning the nodes  PreFigure relies on the Python package networkx to determine the positions of the nodes, a process referred to as layout . This subsection shows some examples that demonstrate the possibilities.  First, we may explicitly declare where we would like the nodes to be by including a p attribute for each node.      The complete graph on 5 vertices.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,1,1)\"> <definition>N=5<\/definition> <definition>f(t)=(cos(2*pi*t\/N), sin(2*pi*t\/N))<\/definition> <network scale=\"0.8\" labels=\"yes\" node-fill=\"#ccf\" node-stroke=\"black\" tactile-node-size=\"40\"> <node at=\"0\" p=\"f(0)\" edges=\"[1,2,3,4]\"\/> <node at=\"1\" p=\"f(1)\" edges=\"[2,3,4]\"\/> <node at=\"2\" p=\"f(2)\" edges=\"[3,4]\"\/> <node at=\"3\" p=\"f(3)\" edges=\"[4]\"\/> <node at=\"4\" p=\"f(4)\"\/> <\/network> <\/coordinates> <\/diagram>   The PreFigure source for .   Alternatively, we can define the structure of the graph by including a graph attribute inside the <network> element and then using <node> elements to set the positions. This is seen in .    <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,1,1)\"> <definition>graph={0:[1,2,3,4], 1:[2,3,4], 2:[3,4], 3:[4]}<\/definition> <definition>N=5<\/definition> <definition>f(t)=(cos(2*pi*t\/N), sin(2*pi*t\/N))<\/definition> <network scale=\"0.8\" labels=\"yes\" graph=\"graph\" node-fill=\"#ccf\" node-stroke=\"black\" tactile-node-size=\"40\"> <node at=\"0\" p=\"f(0)\"\/> <node at=\"1\" p=\"f(1)\"\/> <node at=\"2\" p=\"f(2)\"\/> <node at=\"3\" p=\"f(3)\"\/> <node at=\"4\" p=\"f(4)\"\/> <\/network> <\/coordinates> <\/diagram>   A second source for .   Nodes are created when they are referenced in the dictionary defined by the graph attribute. When a <node> element is encountered inside the <network> element, PreFigure checks to see if the node has already been defined. If not, it will add it to the graph using the edges attribute to append more structure to the network. While this is allowed, it is not necessary and could be confusing to author and maintain a network defined like this.  In these last two examples, we have specified the position of the nodes as an attribute inside the <node> element. If we would like networkx to position the nodes, we have some more options.  By default, PreFigure will use the spring layout defined by networkx . Two other options are bfs , a shorthand for breadth-first, and spectral . Interested authors are encouraged to consult the networkx documentation for more information.  We can prescribe a different layout method using the layout of the <network> element. The diagram in illustrates how the layout=\"bfs\" can be used to illustrate a binary tree.      A binary tree.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition> graph={0:[1,2],1:[3,4],2:[5,6],3:[7,8],4:[9,10],5:[11,12],6:[13,14]} <\/definition> <coordinates bbox=\"(-1,-1,1,1)\"> <rectangle center=\"(0,0)\" dimensions=\"(2,2)\" stroke=\"black\"\/> <network layout=\"bfs\" start=\"0\" graph=\"graph\" node-fill=\"orange\" rotate=\"-90\" scale=\"0.8\"> <node at=\"0\" fill=\"red\"\/> <edge vertices=\"[0,1]\" stroke=\"blue\" thickness=\"4\"\/> <\/network> <\/coordinates> <\/diagram>   The PreFigure source for .   There are a couple of features to notice here. If we use the bfs algorithm for the layout, we need to specify a node at which to start . This is an attribute of the <network> element.  The bfs algorithm produces a tree that moves from left to right. To depict the tree with the root at the top, we use rotate=\"-90\" to rotate the graph.  Since we would like the root to be colored differently, we use a <node> element to specify the color of that node.  In the same way, we use an <edge> element to modify the appearance of a particular edge that has already been added to the graph structure. If the edge has not been added previously, then it will be added to the structure of the graph.    Putting everything together  Networks have a lot of features so it may be worthwhile to show an example that illustrates how these features can be used in mathematical exposition. Suppose that we would like to explain the idea of a spanning tree as a subgraph of a graph . On the left of is the graph with a collection of dashed edges. If we remove those edges, we obtain a spanning tree as shown on the right. To make the point clear, we would like the nodes to be in the same positions in both diagrams.       A graph with some edges indicated on the left. When those edges are removed, we have a spanning tree as seen on the right.     <diagram dimensions=\"(250,250)\" margins=\"5\"> <definition>graph={1:[3,4,5],2:[4,5],3:[4,5],6:[2,4]}<\/definition> <coordinates bbox=\"(-1,-1,1,1)\"> <network graph=\"graph\" scale=\"0.8\" node-fill=\"#fcf\" node-stroke=\"black\" seed=\"1\" labels=\"yes\" node-style=\"box\" tactile-node-size=\"40\"> <edge vertices=\"[3,5]\" dash=\"9 9\"\/> <edge vertices=\"[1,4]\" dash=\"9 9\"\/> <edge vertices=\"[4,6]\" dash=\"9 9\"\/> <edge vertices=\"[2,4]\" dash=\"9 9\"\/> <\/network> <\/coordinates> <\/diagram>   The PreFigure source for the left of .   The PreFigure source for is shown in . Notice how the structure of the graph is defined using a dictionary with instructions given to draw some edges as dashed lines.  The PreFigure source to create the diagram on the right is quite similar except that we replace dash=\"9 9\" in the <edge> elements with stroke=\"none\" .    <diagram dimensions=\"(250,250)\" margins=\"5\"> <definition>graph={1:[3,4,5],2:[4,5],3:[4,5],6:[2,4]}<\/definition> <coordinates bbox=\"(-1,-1,1,1)\"> <network graph=\"graph\" scale=\"0.8\" node-fill=\"#fcf\" node-stroke=\"black\" seed=\"1\" labels=\"yes\" node-style=\"box\" tactile-node-size=\"40\"> <edge vertices=\"[3,5]\" stroke=\"none\"\/> <edge vertices=\"[1,4]\" stroke=\"none\"\/> <edge vertices=\"[4,6]\" stroke=\"none\"\/> <edge vertices=\"[2,4]\" stroke=\"none\"\/> <\/network> <\/coordinates> <\/diagram>   The PreFigure source for the right of .    "
},
{
  "id": "diagram-network-intro",
  "level": "2",
  "url": "sec-networks.html#diagram-network-intro",
  "type": "Figure",
  "number": "3.9.1",
  "title": "",
  "body": "    A simple network.  "
},
{
  "id": "listing-network-intro",
  "level": "2",
  "url": "sec-networks.html#listing-network-intro",
  "type": "Listing",
  "number": "3.9.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>graph={1:[3,4,5,5],2:[4,5],3:[4,5],6:[2,4]}<\/definition> <coordinates bbox=\"(-1,-1,1,1)\"> <network directed=\"yes\" graph=\"graph\" scale=\"0.8\" node-fill=\"#fcf\" node-stroke=\"black\" seed=\"1\" labels=\"yes\" tactile-node-size=\"40\"> <\/network> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "listing-network-verbose",
  "level": "2",
  "url": "sec-networks.html#listing-network-verbose",
  "type": "Listing",
  "number": "3.9.3",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,1,1)\"> <network directed=\"yes\" scale=\"0.8\" node-fill=\"#fcf\" node-stroke=\"black\" seed=\"1\" labels=\"yes\" tactile-node-size=\"40\"> <node at=\"1\" edges=\"[3,4,5,5]\"\/> <node at=\"2\" edges=\"[4,5]\"\/> <node at=\"3\" edges=\"[4,5]\"\/> <node at=\"4\"\/> <node at=\"5\"\/> <node at=\"6\" edges=\"[2,4]\"\/> <\/network> <\/coordinates> <\/diagram>   Another PreFigure source for .  "
},
{
  "id": "diagram-network-manual",
  "level": "2",
  "url": "sec-networks.html#diagram-network-manual",
  "type": "Figure",
  "number": "3.9.4",
  "title": "",
  "body": "    The complete graph on 5 vertices.  "
},
{
  "id": "listing-network-manual",
  "level": "2",
  "url": "sec-networks.html#listing-network-manual",
  "type": "Listing",
  "number": "3.9.5",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,1,1)\"> <definition>N=5<\/definition> <definition>f(t)=(cos(2*pi*t\/N), sin(2*pi*t\/N))<\/definition> <network scale=\"0.8\" labels=\"yes\" node-fill=\"#ccf\" node-stroke=\"black\" tactile-node-size=\"40\"> <node at=\"0\" p=\"f(0)\" edges=\"[1,2,3,4]\"\/> <node at=\"1\" p=\"f(1)\" edges=\"[2,3,4]\"\/> <node at=\"2\" p=\"f(2)\" edges=\"[3,4]\"\/> <node at=\"3\" p=\"f(3)\" edges=\"[4]\"\/> <node at=\"4\" p=\"f(4)\"\/> <\/network> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "listing-network-manual-2",
  "level": "2",
  "url": "sec-networks.html#listing-network-manual-2",
  "type": "Listing",
  "number": "3.9.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,1,1)\"> <definition>graph={0:[1,2,3,4], 1:[2,3,4], 2:[3,4], 3:[4]}<\/definition> <definition>N=5<\/definition> <definition>f(t)=(cos(2*pi*t\/N), sin(2*pi*t\/N))<\/definition> <network scale=\"0.8\" labels=\"yes\" graph=\"graph\" node-fill=\"#ccf\" node-stroke=\"black\" tactile-node-size=\"40\"> <node at=\"0\" p=\"f(0)\"\/> <node at=\"1\" p=\"f(1)\"\/> <node at=\"2\" p=\"f(2)\"\/> <node at=\"3\" p=\"f(3)\"\/> <node at=\"4\" p=\"f(4)\"\/> <\/network> <\/coordinates> <\/diagram>   A second source for .  "
},
{
  "id": "diagram-network-tree",
  "level": "2",
  "url": "sec-networks.html#diagram-network-tree",
  "type": "Figure",
  "number": "3.9.7",
  "title": "",
  "body": "    A binary tree.  "
},
{
  "id": "listing-network-tree",
  "level": "2",
  "url": "sec-networks.html#listing-network-tree",
  "type": "Listing",
  "number": "3.9.8",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition> graph={0:[1,2],1:[3,4],2:[5,6],3:[7,8],4:[9,10],5:[11,12],6:[13,14]} <\/definition> <coordinates bbox=\"(-1,-1,1,1)\"> <rectangle center=\"(0,0)\" dimensions=\"(2,2)\" stroke=\"black\"\/> <network layout=\"bfs\" start=\"0\" graph=\"graph\" node-fill=\"orange\" rotate=\"-90\" scale=\"0.8\"> <node at=\"0\" fill=\"red\"\/> <edge vertices=\"[0,1]\" stroke=\"blue\" thickness=\"4\"\/> <\/network> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-network-spanning",
  "level": "2",
  "url": "sec-networks.html#diagram-network-spanning",
  "type": "Figure",
  "number": "3.9.9",
  "title": "",
  "body": "     A graph with some edges indicated on the left. When those edges are removed, we have a spanning tree as seen on the right.  "
},
{
  "id": "listing-network-spanning",
  "level": "2",
  "url": "sec-networks.html#listing-network-spanning",
  "type": "Listing",
  "number": "3.9.10",
  "title": "",
  "body": "  <diagram dimensions=\"(250,250)\" margins=\"5\"> <definition>graph={1:[3,4,5],2:[4,5],3:[4,5],6:[2,4]}<\/definition> <coordinates bbox=\"(-1,-1,1,1)\"> <network graph=\"graph\" scale=\"0.8\" node-fill=\"#fcf\" node-stroke=\"black\" seed=\"1\" labels=\"yes\" node-style=\"box\" tactile-node-size=\"40\"> <edge vertices=\"[3,5]\" dash=\"9 9\"\/> <edge vertices=\"[1,4]\" dash=\"9 9\"\/> <edge vertices=\"[4,6]\" dash=\"9 9\"\/> <edge vertices=\"[2,4]\" dash=\"9 9\"\/> <\/network> <\/coordinates> <\/diagram>   The PreFigure source for the left of .  "
},
{
  "id": "listing-network-spanning-2",
  "level": "2",
  "url": "sec-networks.html#listing-network-spanning-2",
  "type": "Listing",
  "number": "3.9.11",
  "title": "",
  "body": "  <diagram dimensions=\"(250,250)\" margins=\"5\"> <definition>graph={1:[3,4,5],2:[4,5],3:[4,5],6:[2,4]}<\/definition> <coordinates bbox=\"(-1,-1,1,1)\"> <network graph=\"graph\" scale=\"0.8\" node-fill=\"#fcf\" node-stroke=\"black\" seed=\"1\" labels=\"yes\" node-style=\"box\" tactile-node-size=\"40\"> <edge vertices=\"[3,5]\" stroke=\"none\"\/> <edge vertices=\"[1,4]\" stroke=\"none\"\/> <edge vertices=\"[4,6]\" stroke=\"none\"\/> <edge vertices=\"[2,4]\" stroke=\"none\"\/> <\/network> <\/coordinates> <\/diagram>   The PreFigure source for the right of .  "
},
{
  "id": "sec-paths",
  "level": "1",
  "url": "sec-paths.html",
  "type": "Section",
  "number": "3.10",
  "title": "Paths",
  "body": " Paths   The <path> tag provides authors with the means to create more complicated objects by concatenating simpler ones. As a preview, notice that there are two <path> s in . The simpler path, in red, is a single quadratic Bézier curve. The more complicated path, in blue, is composed of line segments, a circular arc, and a cubic Bézier curve, with one of the line segments decorated with a zig-zag pattern.      The graphical result of two <path> s.     Defining paths  We will first focus on how a <path> is defined by concatenating simpler pieces. Throughout the definition of a path, there is always a current point that is used to construct the next piece of the path. For this reason, a <path> tag must always have a start attribute, which serves as the initial point of the path.   shows two paths and the PreFigure source given in .      The graphical result of two <path> s.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decortions=\"no\"\/> <path start=\"(1,1)\" stroke=\"blue\" arrows=\"1\"> <lineto point=\"(3,2)\"\/> <moveto point=\"(4,2)\"\/> <horizontal distance=\"2\"\/> <vertical distance=\"4\"\/> <arc center=\"(7.5,6)\" radius=\"1.5\" range=\"(180,0)\"\/> <cubic-bezier controls=\"((9,2), (8,2), (7,2))\"\/> <\/path> <path start=\"(1,5)\" stroke=\"red\" arrows=\"2\"> <quadratic-bezier controls=\"((1,8),(5,8))\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the paths in   The first path in blue, defined by lines 4 through 11, demonstrates many options that are available when defining a path.   lineto  The <lineto> tag has a point attribute, as seen in line 5. This has the effect of adding to the path a line segment from the current point to the point and updating the current point.    rlineto  This is similar to a <line> tag except that the point attribute is interpreted as a relative change from the current point.    moveto  The <moveto> tag, shown in line 6, simply updates the current point to the given point without adding a line segment. In effect, it is like picking up your pen.    rmoveto  This tag interpretes the point as a relative change in the current point.    horizontal  The <horizontal> tag is like a <lineto> where the new endpoint is a given horizontal distance from the current point.    arc  An <arc> tag adds a circular arc to the path with a specific center , radius , and angular range . If the first point of the arc is not the same as the current point, then a line segment from the current point to the first point is added.    cubic-bezier and quadratic bezier  Bézier curves are smooth curves defined in terms of a set of control points . Mathematically, Bézier curves are parametric curves whose coordinate functions are polynomials. PreFigure provides access to both cubic and quadratic Bézier curves through the tags <cubic-bezier> and <quadratic-bezier> .  shows two paths consisting only of Bézier curves. The lower path consists of two cubic Bézier curves. The labeled point is the starting point while , , and are the three given control points. The final control point, , is the endpoint of the first Bézier curve while the control points and define the initial and final velocities of the curve.      The graphical result of two <path> s.   A quadratic Bézier curve, the upper curve in , is similar but is defined by only two control points.  shows the PreFigure source, omitting some of the details, of .    <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decortions=\"no\"\/> <path start=\"(1,3)\" stroke=\"blue\"> <cubic-bezier controls=\"((2,5),(4,5),(5,3))\"\/> <cubic-bezier controls=\"((6,1),(8,1),(9,3))\"\/> <\/path> <path start=\"(5,7)\" stroke=\"red\"> <quadratic-bezier controls=\"((4,9),(8,9))\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the Bézier curves in     Repeat  A <repeat> tag can be included inside a <path> as long as its children are allowed in a <path> . See for more details.    Other constructions  Some familiar constructions, such as <graph> , <parametric_curve> , and <polygon> can also be placed inside of a <path> . Ths is demonstrated in and its accompanying .      The graphical result of two <path> s.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decorations=\"no\"\/> <definition>f(x)=3*sin((x-1)\/8*pi)+5<\/definition> <path start=\"(1,1)\" stroke=\"blue\" closed=\"yes\"> <vertical distance=\"4\"\/> <graph function=\"f\" domain=\"(1,5)\"\/> <lineto point=\"(5,1)\"\/> <\/path> <definition>f(t)=(8-0.25*sin(2*(t-1)*pi),t)<\/definition> <path start=\"(8,1)\" stroke=\"red\"> <parametric-curve function=\"f\" domain=\"(1,6)\"\/> <polygon points=\"((8,6),(9,8),(8,9),(7,8),(8,6))\"\/> <moveto point=\"(7,8)\"\/> <horizontal distance=\"2\"\/> <moveto point=\"(8,6)\"\/> <vertical distance=\"3\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the Bézier curves in      A <path> may have an attribute closed=\"yes\" that closes the path. You will need to be explicit about how the <path> is displayed by specifying a stroke and\/or fill .    Decorations  Line segments within a <path> defined by a <lineto> , <rlineto> , <horizontal> , or <vertical> may be decorated in a variety of ways using a decoration attribute. The value of this attribute is a set of parameters separated by semicolons, the first of which is the type of decoration, either coil , wave , zigzag , or capacitor , as shown in       Some path decorations.     <diagram dimensions=\"(400,200)\" margins=\"5\"> <coordinates bbox=\"(-3,2,10,10)\"> <path start=\"(1,9)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"coil; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,9)\" alignment=\"w\">coil<\/label> <path start=\"(1,7)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"wave; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,7)\" alignment=\"w\">wave<\/label> <path start=\"(1,5)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"capacitor; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,5)\" alignment=\"w\">capacitor<\/label> <path start=\"(1,3)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"zigzag; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,3)\" alignment=\"w\">zigzag<\/label> <\/coordinates> <\/diagram>   The PreFigure source for the coils in .   The coil decoration resembles a spring. You can specify the number of coils on the line segment, the dimensions , and the center .  The dimensions parameter is an ordered pair whose values are interepreted in SVG coordinate lengths. The first number gives the horizontal distance traversed by one coil while the second gives the maximum vertical displacement from the undecorated line segment.  The center parameter is a number between 0 and 1, interpreted as a fraction of the length of the line segment, that indicates where the center of the coils lies. The value of this parameter is 0.5 by default, which centers the coil on the line segment.  shows some examples with the source code in .      Some coil decorations.     <diagram dimensions=\"(300,200)\" margins=\"5\"> <coordinates bbox=\"(0,-0.5,5,2.5)\"> <path start=\"(0,0)\" stroke=\"black\"> <lineto point=\"(5,0)\" decoration=\"coil; number=5; dimensions=(10,10); center=0.7\"\/> <\/path> <path start=\"(0,1)\" stroke=\"black\"> <horizontal distance=\"5\" decoration=\"coil; number=10; dimensions=(10,5)\"\/> <\/path> <path start=\"(0,2)\" stroke=\"black\"> <lineto point=\"(5,2)\" decoration=\"coil; number=5; dimensions=(5,10)\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the coils in .   demonstrates the use of some coils.      Using decorations to represent a spring. Adapted from Tom Judson's Ordinary Differential Equations Project .     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,4)\" destination=\"(10,160,300,300)\"> <polygon points=\"((0,4),(0,0),(5,0))\" stroke=\"black\"\/> <path start=\"(0,1)\" stroke=\"black\"> <lineto point=\"(3.5,1)\" decoration=\"coil; number=5 ; dimensions=(15,10)\"\/> <\/path> <rectangle center=\"(4,1)\" dimensions=\"(1,2)\" fill=\"lightblue\" stroke=\"black\"\/> <\/coordinates> <coordinates bbox=\"(0,0,5,4)\" destination=\"(10,10,300,150)\"> <polygon points=\"((0,4),(0,0),(5,0))\" stroke=\"black\"\/> <path start=\"(0,1)\" stroke=\"black\"> <lineto point=\"(2,1)\" decoration=\"coil; number=5 ; dimensions=(6,10)\"\/> <\/path> <rectangle center=\"(2.5,1)\" dimensions=\"(1,2)\" fill=\"lightblue\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   The zigzag decoration has the same parameters as a coil while the capacitor decoration has a center parameter, which again defaults to 0.5, and a dimensions parameter, which controls the horizontal gap and vertical length      An RLC circuit. Adapted from Tom Judson's Ordinary Differential Equations Project .     <diagram dimensions=\"(300,200)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,9)\"> <path start=\"(1,1)\" stroke=\"black\"> <lineto point=\"(1,8)\"\/> <lineto point=\"(9,8)\" decoration=\"coil; number=5; dimensions=(10,10)\"\/> <lineto point=\"(9,1)\" decoration=\"capacitor; dimensions=(12,15)\"\/> <lineto point=\"(1,1)\" decoration=\"zigzag; number=5; dimensions=(10,10)\"\/> <\/path> <point p=\"(1,4.5)\" size=\"20\" fill=\"white\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .    "
},
{
  "id": "diagram-path-preview",
  "level": "2",
  "url": "sec-paths.html#diagram-path-preview",
  "type": "Figure",
  "number": "3.10.1",
  "title": "",
  "body": "    The graphical result of two <path> s.  "
},
{
  "id": "diagram-paths",
  "level": "2",
  "url": "sec-paths.html#diagram-paths",
  "type": "Figure",
  "number": "3.10.2",
  "title": "",
  "body": "    The graphical result of two <path> s.  "
},
{
  "id": "listing-paths",
  "level": "2",
  "url": "sec-paths.html#listing-paths",
  "type": "Listing",
  "number": "3.10.3",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decortions=\"no\"\/> <path start=\"(1,1)\" stroke=\"blue\" arrows=\"1\"> <lineto point=\"(3,2)\"\/> <moveto point=\"(4,2)\"\/> <horizontal distance=\"2\"\/> <vertical distance=\"4\"\/> <arc center=\"(7.5,6)\" radius=\"1.5\" range=\"(180,0)\"\/> <cubic-bezier controls=\"((9,2), (8,2), (7,2))\"\/> <\/path> <path start=\"(1,5)\" stroke=\"red\" arrows=\"2\"> <quadratic-bezier controls=\"((1,8),(5,8))\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the paths in  "
},
{
  "id": "diagram-bezier",
  "level": "2",
  "url": "sec-paths.html#diagram-bezier",
  "type": "Figure",
  "number": "3.10.4",
  "title": "",
  "body": "    The graphical result of two <path> s.  "
},
{
  "id": "listing-bezier",
  "level": "2",
  "url": "sec-paths.html#listing-bezier",
  "type": "Listing",
  "number": "3.10.5",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decortions=\"no\"\/> <path start=\"(1,3)\" stroke=\"blue\"> <cubic-bezier controls=\"((2,5),(4,5),(5,3))\"\/> <cubic-bezier controls=\"((6,1),(8,1),(9,3))\"\/> <\/path> <path start=\"(5,7)\" stroke=\"red\"> <quadratic-bezier controls=\"((4,9),(8,9))\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the Bézier curves in  "
},
{
  "id": "diagram-more-paths",
  "level": "2",
  "url": "sec-paths.html#diagram-more-paths",
  "type": "Figure",
  "number": "3.10.6",
  "title": "",
  "body": "    The graphical result of two <path> s.  "
},
{
  "id": "listing-more-paths",
  "level": "2",
  "url": "sec-paths.html#listing-more-paths",
  "type": "Listing",
  "number": "3.10.7",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes decorations=\"no\"\/> <definition>f(x)=3*sin((x-1)\/8*pi)+5<\/definition> <path start=\"(1,1)\" stroke=\"blue\" closed=\"yes\"> <vertical distance=\"4\"\/> <graph function=\"f\" domain=\"(1,5)\"\/> <lineto point=\"(5,1)\"\/> <\/path> <definition>f(t)=(8-0.25*sin(2*(t-1)*pi),t)<\/definition> <path start=\"(8,1)\" stroke=\"red\"> <parametric-curve function=\"f\" domain=\"(1,6)\"\/> <polygon points=\"((8,6),(9,8),(8,9),(7,8),(8,6))\"\/> <moveto point=\"(7,8)\"\/> <horizontal distance=\"2\"\/> <moveto point=\"(8,6)\"\/> <vertical distance=\"3\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the Bézier curves in  "
},
{
  "id": "diagram-path-decorations",
  "level": "2",
  "url": "sec-paths.html#diagram-path-decorations",
  "type": "Figure",
  "number": "3.10.8",
  "title": "",
  "body": "    Some path decorations.  "
},
{
  "id": "listing-path-decorations",
  "level": "2",
  "url": "sec-paths.html#listing-path-decorations",
  "type": "Listing",
  "number": "3.10.9",
  "title": "",
  "body": "  <diagram dimensions=\"(400,200)\" margins=\"5\"> <coordinates bbox=\"(-3,2,10,10)\"> <path start=\"(1,9)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"coil; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,9)\" alignment=\"w\">coil<\/label> <path start=\"(1,7)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"wave; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,7)\" alignment=\"w\">wave<\/label> <path start=\"(1,5)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"capacitor; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,5)\" alignment=\"w\">capacitor<\/label> <path start=\"(1,3)\" closed=\"no\" arrows=\"2\" stroke=\"blue\"> <rlineto point=\"(8,0)\" decoration=\"zigzag; number=10; dimensions=(10,10)\"\/> <\/path> <label anchor=\"(0,3)\" alignment=\"w\">zigzag<\/label> <\/coordinates> <\/diagram>   The PreFigure source for the coils in .  "
},
{
  "id": "diagram-coils",
  "level": "2",
  "url": "sec-paths.html#diagram-coils",
  "type": "Figure",
  "number": "3.10.10",
  "title": "",
  "body": "    Some coil decorations.  "
},
{
  "id": "listing-coils",
  "level": "2",
  "url": "sec-paths.html#listing-coils",
  "type": "Listing",
  "number": "3.10.11",
  "title": "",
  "body": "  <diagram dimensions=\"(300,200)\" margins=\"5\"> <coordinates bbox=\"(0,-0.5,5,2.5)\"> <path start=\"(0,0)\" stroke=\"black\"> <lineto point=\"(5,0)\" decoration=\"coil; number=5; dimensions=(10,10); center=0.7\"\/> <\/path> <path start=\"(0,1)\" stroke=\"black\"> <horizontal distance=\"5\" decoration=\"coil; number=10; dimensions=(10,5)\"\/> <\/path> <path start=\"(0,2)\" stroke=\"black\"> <lineto point=\"(5,2)\" decoration=\"coil; number=5; dimensions=(5,10)\"\/> <\/path> <\/coordinates> <\/diagram>   The PreFigure source for the coils in .  "
},
{
  "id": "diagram-mass-spring",
  "level": "2",
  "url": "sec-paths.html#diagram-mass-spring",
  "type": "Figure",
  "number": "3.10.12",
  "title": "",
  "body": "    Using decorations to represent a spring. Adapted from Tom Judson's Ordinary Differential Equations Project .  "
},
{
  "id": "listing-mass-spring",
  "level": "2",
  "url": "sec-paths.html#listing-mass-spring",
  "type": "Listing",
  "number": "3.10.13",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,5,4)\" destination=\"(10,160,300,300)\"> <polygon points=\"((0,4),(0,0),(5,0))\" stroke=\"black\"\/> <path start=\"(0,1)\" stroke=\"black\"> <lineto point=\"(3.5,1)\" decoration=\"coil; number=5 ; dimensions=(15,10)\"\/> <\/path> <rectangle center=\"(4,1)\" dimensions=\"(1,2)\" fill=\"lightblue\" stroke=\"black\"\/> <\/coordinates> <coordinates bbox=\"(0,0,5,4)\" destination=\"(10,10,300,150)\"> <polygon points=\"((0,4),(0,0),(5,0))\" stroke=\"black\"\/> <path start=\"(0,1)\" stroke=\"black\"> <lineto point=\"(2,1)\" decoration=\"coil; number=5 ; dimensions=(6,10)\"\/> <\/path> <rectangle center=\"(2.5,1)\" dimensions=\"(1,2)\" fill=\"lightblue\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-rcl-circuit",
  "level": "2",
  "url": "sec-paths.html#diagram-rcl-circuit",
  "type": "Figure",
  "number": "3.10.14",
  "title": "",
  "body": "    An RLC circuit. Adapted from Tom Judson's Ordinary Differential Equations Project .  "
},
{
  "id": "listing-rcl-circuit",
  "level": "2",
  "url": "sec-paths.html#listing-rcl-circuit",
  "type": "Listing",
  "number": "3.10.15",
  "title": "",
  "body": "  <diagram dimensions=\"(300,200)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,9)\"> <path start=\"(1,1)\" stroke=\"black\"> <lineto point=\"(1,8)\"\/> <lineto point=\"(9,8)\" decoration=\"coil; number=5; dimensions=(10,10)\"\/> <lineto point=\"(9,1)\" decoration=\"capacitor; dimensions=(12,15)\"\/> <lineto point=\"(1,1)\" decoration=\"zigzag; number=5; dimensions=(10,10)\"\/> <\/path> <point p=\"(1,4.5)\" size=\"20\" fill=\"white\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-shapes",
  "level": "1",
  "url": "sec-shapes.html",
  "type": "Section",
  "number": "3.11",
  "title": "Shape constructions and clipping",
  "body": " Shape constructions and clipping   This section introduces shapes and some things you can do with them. A shape is any graphical component that defines a two-dimensional region, such as a <circle> , <rectangle> , <polygon> , or <path> . The tags <graph> or <parametric-curve> also define shapes as, behind the scenes, PreFigure will close the paths they define.    Defining shapes  Shapes are defined within a special <define-shapes> tag, which make them available for later use. , and the accompanying PreFigure source in , provides a simple example.      A simple use of the <shape> tag.     <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,6)\"> <define-shapes> <circle at=\"A\" center=\"(4,3)\" radius=\"2\"\/> <\/define-shapes> <shape shape=\"A\" fill=\"magenta\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,6)\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in   Note the use of the <define-shapes> tag in lines 3 through 5. Within this tag, we define a circle with the handle at=\"A\" . Any stroke or fill attributes will be ignored in the definition since we mean to focus solely on the geometric shape. Also, it is important that shapes be defined within a <coordinates> tag as the definitions become invalid once we leave this coordinate system.  We then recall the shape in line 7 and supply attributes for filling and stroking it within that element. Notice that the attribute shape=\"A\" serves as a reference to the previously defined shape. As we will see, we sometimes want to recall two or more shapes at once, which we could do with a comma-separated list. For this reason, PreFigure accepts either the attribute shapes (note the plural) or shape as a convenience.    Shape Constructions  Of course, we could easily have created the diagram in with a single <circle> tag. Shapes, however, provide us with access to some set operations, such as intersections, unions, and differences. For example, demonstrates how we can define the difference of two sets .      The difference of two sets.     <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,6)\"> <define-shapes> <circle at=\"A\" center=\"(4,3)\" radius=\"2\"\/> <circle at=\"B\" center=\"(6,3)\" radius=\"2\"\/> <\/define-shapes> <shape shapes=\"A,B\" operation=\"difference\" fill=\"magenta\" stroke=\"black\"\/> <shape shape=\"A\" stroke=\"black\"\/> <shape shape=\"B\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,6)\" stroke=\"black\"\/> <label anchor=\"(2,3)\" alignment=\"nw\"><m>A<\/m><\/label> <label anchor=\"(8,3)\" alignment=\"ne\"><m>B<\/m><\/label> <label anchor=\"(5,0.5)\"><m>A\\setminus B<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in   In this example, we define two sets and in the <define-shapes> tag. We then construct and display their intersection using the <shape> tag in lines 8 and 9. Notice that we use the shapes attribute to recall the two shapes (though shape=\"A,B\" would also suffice). The attribute operation=\"difference\" declares that this set should be constructed as the difference of the two sets. In this case, shapes=\"B,A\" would yield the difference .  Other operations include operation=\"union\" , operation=\"intersection\" , and operation=\"symmetric-difference\" or \"sym-diff\" . These four operations are demonstrated in .             Four sets operations.   Intersections, unions, and symmetric differences can take any number of sets, while a difference requires exactly two.  A fifth operation is operation=\"convex-hull\" , which produces the convex hull of the union of the given shapes. includes a demonstration, with the convex hull of two sets outlined in red. This is not an especially realistic diagram, but it does demonstrate some of the possibilities when working with shapes.      The convex hull of the union of two shapes.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <define-shapes> <circle at=\"circle\" center=\"(6,7)\" radius=\"2\"\/> <rectangle at=\"lower-rectangle\" center=\"(4,4)\" dimensions=\"(5,4)\" corner-radius=\"10\"\/> <rectangle at=\"upper-rectangle\" center=\"(4,7.5)\" dimensions=\"(5,1)\" corner-radius=\"10\"\/> <shape shapes=\"circle,lower-rectangle,upper-rectangle\" operation=\"sym-diff\" at=\"sym-diff\"\/> <circle at=\"right-circle\" center=\"(8.5,8.5)\" radius=\"1\"\/> <\/define-shapes> <grid-axes decorations=\"no\"\/> <shape shapes=\"sym-diff,right-circle\" operation=\"convex-hull\" stroke=\"red\" thickness=\"8\"\/> <shape shapes=\"sym-diff\" fill=\"magenta\" stroke=\"black\"\/> <shape shapes=\"circle\" stroke=\"black\"\/> <shape shapes=\"upper-rectangle\" stroke=\"black\"\/> <shape shapes=\"lower-rectangle\" stroke=\"black\"\/> <shape shape=\"right-circle\" fill=\"blue\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in     Clipping  A second use of shapes is to clip a diagram with the <clip> tag. provides a demonstration. Notice that the clipping shape is applied only to elements that are children of the <clip> tag.      Using the <clip> tag.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <define-shapes> <rectangle at=\"square1\" center=\"(4,4)\" dimensions=\"(3,3)\" corner-radius=\"10\"\/> <rectangle at=\"square2\" center=\"(3,6)\" dimensions=\"(2,2)\" corner-radius=\"5\"\/> <shape at=\"clip\" shapes=\"square1, square2\" operation=\"union\"\/> <circle at=\"circle\" center=\"(6,6)\" radius=\"3\"\/> <\/define-shapes> <shape shape=\"circle\" fill=\"lightgray\" stroke=\"gray\"\/> <clip shape=\"clip\"> <shape shape=\"circle\" fill=\"blue\" stroke=\"black\"\/> <\/clip> <shape shape=\"clip\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,10)\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in    "
},
{
  "id": "diagram-shape-start",
  "level": "2",
  "url": "sec-shapes.html#diagram-shape-start",
  "type": "Figure",
  "number": "3.11.1",
  "title": "",
  "body": "    A simple use of the <shape> tag.  "
},
{
  "id": "listing-shape-start",
  "level": "2",
  "url": "sec-shapes.html#listing-shape-start",
  "type": "Listing",
  "number": "3.11.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,6)\"> <define-shapes> <circle at=\"A\" center=\"(4,3)\" radius=\"2\"\/> <\/define-shapes> <shape shape=\"A\" fill=\"magenta\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,6)\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in  "
},
{
  "id": "diagram-shape-difference",
  "level": "2",
  "url": "sec-shapes.html#diagram-shape-difference",
  "type": "Figure",
  "number": "3.11.3",
  "title": "",
  "body": "    The difference of two sets.  "
},
{
  "id": "listing-shape-difference",
  "level": "2",
  "url": "sec-shapes.html#listing-shape-difference",
  "type": "Listing",
  "number": "3.11.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,180)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,6)\"> <define-shapes> <circle at=\"A\" center=\"(4,3)\" radius=\"2\"\/> <circle at=\"B\" center=\"(6,3)\" radius=\"2\"\/> <\/define-shapes> <shape shapes=\"A,B\" operation=\"difference\" fill=\"magenta\" stroke=\"black\"\/> <shape shape=\"A\" stroke=\"black\"\/> <shape shape=\"B\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,6)\" stroke=\"black\"\/> <label anchor=\"(2,3)\" alignment=\"nw\"><m>A<\/m><\/label> <label anchor=\"(8,3)\" alignment=\"ne\"><m>B<\/m><\/label> <label anchor=\"(5,0.5)\"><m>A\\setminus B<\/m><\/label> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in  "
},
{
  "id": "diagram-shape-construct",
  "level": "2",
  "url": "sec-shapes.html#diagram-shape-construct",
  "type": "Figure",
  "number": "3.11.5",
  "title": "",
  "body": "           Four sets operations.  "
},
{
  "id": "diagram-shape-convex",
  "level": "2",
  "url": "sec-shapes.html#diagram-shape-convex",
  "type": "Figure",
  "number": "3.11.6",
  "title": "",
  "body": "    The convex hull of the union of two shapes.  "
},
{
  "id": "listing-shape-convex",
  "level": "2",
  "url": "sec-shapes.html#listing-shape-convex",
  "type": "Listing",
  "number": "3.11.7",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <define-shapes> <circle at=\"circle\" center=\"(6,7)\" radius=\"2\"\/> <rectangle at=\"lower-rectangle\" center=\"(4,4)\" dimensions=\"(5,4)\" corner-radius=\"10\"\/> <rectangle at=\"upper-rectangle\" center=\"(4,7.5)\" dimensions=\"(5,1)\" corner-radius=\"10\"\/> <shape shapes=\"circle,lower-rectangle,upper-rectangle\" operation=\"sym-diff\" at=\"sym-diff\"\/> <circle at=\"right-circle\" center=\"(8.5,8.5)\" radius=\"1\"\/> <\/define-shapes> <grid-axes decorations=\"no\"\/> <shape shapes=\"sym-diff,right-circle\" operation=\"convex-hull\" stroke=\"red\" thickness=\"8\"\/> <shape shapes=\"sym-diff\" fill=\"magenta\" stroke=\"black\"\/> <shape shapes=\"circle\" stroke=\"black\"\/> <shape shapes=\"upper-rectangle\" stroke=\"black\"\/> <shape shapes=\"lower-rectangle\" stroke=\"black\"\/> <shape shape=\"right-circle\" fill=\"blue\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in  "
},
{
  "id": "diagram-shape-clip",
  "level": "2",
  "url": "sec-shapes.html#diagram-shape-clip",
  "type": "Figure",
  "number": "3.11.8",
  "title": "",
  "body": "    Using the <clip> tag.  "
},
{
  "id": "listing-shape-clip",
  "level": "2",
  "url": "sec-shapes.html#listing-shape-clip",
  "type": "Listing",
  "number": "3.11.9",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <define-shapes> <rectangle at=\"square1\" center=\"(4,4)\" dimensions=\"(3,3)\" corner-radius=\"10\"\/> <rectangle at=\"square2\" center=\"(3,6)\" dimensions=\"(2,2)\" corner-radius=\"5\"\/> <shape at=\"clip\" shapes=\"square1, square2\" operation=\"union\"\/> <circle at=\"circle\" center=\"(6,6)\" radius=\"3\"\/> <\/define-shapes> <shape shape=\"circle\" fill=\"lightgray\" stroke=\"gray\"\/> <clip shape=\"clip\"> <shape shape=\"circle\" fill=\"blue\" stroke=\"black\"\/> <\/clip> <shape shape=\"clip\" stroke=\"black\"\/> <rectangle lower-left=\"(0,0)\" dimensions=\"(10,10)\" stroke=\"black\"\/> <\/coordinates> <\/diagram>   The PreFigure source for the diagram in  "
},
{
  "id": "sec-publication",
  "level": "1",
  "url": "sec-publication.html",
  "type": "Section",
  "number": "4.1",
  "title": "The publication file",
  "body": " The publication file  When illustrating a large project such as a book, you will likely want to create diagrams that have a consistent style. PreFigure constructs some components with default values for the attributes. For instance, a <graph> is stroked blue by default and a <point> is filled red. You may, however, wish to change these default behaviors with a publication file, as shown in     <prefigure> <graph stroke=\"green\"\/> <point style=\"diamond\" size=\"5\" fill=\"blue\" outline=\"yes\"\/> <macros> \\newcommand{\\deriv}[2]{\\displaystyle \\frac{d#1}{d#2}} \\newcommand{\\real}{\\Bbb R} <\/macros> <\/prefigure>   A sample publication file   The publication file begins with a <prefigure> element whose children describe desired default behaviors for a few graphical components. For instance, this publication file asks that a <graph> be stroked green and that a <point> has a few default attributes. Notice that the publication file also includes a list of latex macros, given in the <macros> element, that can be used in labels.  To illustrate, contains a diagram created using this publication file with showing the PreFigure source.      A diagram created using the publication file in     <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=exp(x\/3)*cos(x)<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <grid-axes ylabel=\"\\real^2\"\/> <graph function=\"f\"\/> <repeat parameter=\"k=-3..3\"> <point p=\"(k,f(k))\"\/> <\/repeat> <label p=\"(2,2)\" clear-background=\"yes\"> <m>\\deriv{y}{x}<\/m> <\/label> <point p=\"(-2,2)\" fill=\"red\" size=\"4\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Because the publication file sets the stroke attribute of <graph> to be green, the graph of the function is stroked green by default. The <point> s on the graph are also created using the attributes given in the publication file. Notice that any attributes given in one of these tags, such as the <point> that is filled red, take precedence over the values in the publication file. This example also demonstrates the use of latex macros in the labels.  To apply the publication file pub_file.xml to a diagram, use the -p switch when compiling: prefig build -p pub_file.xml foo.xml   A good way to get started using a publication file for a large project is to say prefig new which has the effect of copying an empty publication pf_publication.xml and the diagcess tools into the current directory. If you do not specify a publication file in a build command, PreFigure will look for a pf_publication.xml in the current directory or a parent directory. To disable the use of any publication file, use the -i or --ignore_publication flag with the build command: prefig build -i foo.xml   "
},
{
  "id": "listing-pub-file",
  "level": "2",
  "url": "sec-publication.html#listing-pub-file",
  "type": "Listing",
  "number": "4.1.1",
  "title": "",
  "body": "  <prefigure> <graph stroke=\"green\"\/> <point style=\"diamond\" size=\"5\" fill=\"blue\" outline=\"yes\"\/> <macros> \\newcommand{\\deriv}[2]{\\displaystyle \\frac{d#1}{d#2}} \\newcommand{\\real}{\\Bbb R} <\/macros> <\/prefigure>   A sample publication file  "
},
{
  "id": "diagram-publication",
  "level": "2",
  "url": "sec-publication.html#diagram-publication",
  "type": "Figure",
  "number": "4.1.2",
  "title": "",
  "body": "    A diagram created using the publication file in  "
},
{
  "id": "listing-publication",
  "level": "2",
  "url": "sec-publication.html#listing-publication",
  "type": "Listing",
  "number": "4.1.3",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(x)=exp(x\/3)*cos(x)<\/definition> <coordinates bbox=\"(-4,-4,4,4)\"> <grid-axes ylabel=\"\\real^2\"\/> <graph function=\"f\"\/> <repeat parameter=\"k=-3..3\"> <point p=\"(k,f(k))\"\/> <\/repeat> <label p=\"(2,2)\" clear-background=\"yes\"> <m>\\deriv{y}{x}<\/m> <\/label> <point p=\"(-2,2)\" fill=\"red\" size=\"4\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-pretext",
  "level": "1",
  "url": "sec-pretext.html",
  "type": "Section",
  "number": "4.2",
  "title": "Authoring diagrams within PreTeXt",
  "body": " Authoring diagrams within PreTeXt  PreTeXt authors will notice that the design of is very much inspired by PreTeXt . In fact, it is possible to write source directly inside a PreTeXt document. There are just a few things to be aware of.  The diagram in was created inside a PreTeXt document, as we will explain.      A diagram created inside a PreTeXt document as shown in .   shows a portion of a PreTeXt document containing source. First, notice that we use a PreTeXt  <image> element and place a PreTeXt  <prefigure> element inside of it. The <prefigure> element needs to have the attribute xmlns=\"https:\/\/prefigure.org\" , which serves to effectively isolate any source from the rest of the document, and a label giving the diagram a name.    <image width=\"60%\"> <prefigure xmlns=\"https:\/\/prefigure.org\" label=\"prefigure-rectangle\"> <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes\/> <rectangle center=\"(5,5)\" dimensions=\"(6,6)\"\/> <label anchor=\"(0.5,0.5)\" alignment=\"ne\" clear-background=\"yes\"> The derivative is <m>\\deriv{y}{x}<\/m>. <\/label> <\/coordinates> <\/diagram> <\/prefigure> <\/image>    source inside a PreTeXt document.   Rather than a publication file, as described in , default behaviors can be specified in the PreTeXt  <docinfo> element as shown in . Including this has the effect of applying the publication file given in .    <docinfo> <macros> \\newcommand{\\deriv}[2]{\\displaystyle \\frac{d#1}{d#2}} \\newcommand{\\real}{\\Bbb R} <\/macros> <prefigure-preamble xmlns=\"https:\/\/prefigure.org\"> <graph stroke=\"green\"\/> <point style=\"diamond\" size=\"5\" fill=\"blue\" outline=\"yes\"\/> <\/prefigure-preamble> <\/docinfo>   Within a PreTeXt document, publication data is included inside <docinfo> .   Notice that the latex macros defined inside <docinfo\/macros> , which are available throughout the entire PreTeXt document, are also made available for creating labels. In addition, three more macros will be automatically added: \\newcommand{\\lt}{&lt;} \\newcommand{\\gt}{&gt;} \\newcommand{\\amp}{&amp;}   Furthermore, you may add a <prefigure-preamable> element inside <docinfo> to change the default appearance of specified graphical components. The <prefigure-preamble> element needs the same namespace attribute xmlns=\"https:\/\/prefigure.org\" as the <prefigure> element.  The PreTeXt document that created has a <prefigure-preamble> with a single <rectangle> element having attributes stroke=\"black\" and fill=\"green\" . The <macros> includes the latex macro to create the label .  "
},
{
  "id": "diagram-pretext",
  "level": "2",
  "url": "sec-pretext.html#diagram-pretext",
  "type": "Figure",
  "number": "4.2.1",
  "title": "",
  "body": "    A diagram created inside a PreTeXt document as shown in .  "
},
{
  "id": "listing-pretext",
  "level": "2",
  "url": "sec-pretext.html#listing-pretext",
  "type": "Listing",
  "number": "4.2.2",
  "title": "",
  "body": "  <image width=\"60%\"> <prefigure xmlns=\"https:\/\/prefigure.org\" label=\"prefigure-rectangle\"> <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes\/> <rectangle center=\"(5,5)\" dimensions=\"(6,6)\"\/> <label anchor=\"(0.5,0.5)\" alignment=\"ne\" clear-background=\"yes\"> The derivative is <m>\\deriv{y}{x}<\/m>. <\/label> <\/coordinates> <\/diagram> <\/prefigure> <\/image>    source inside a PreTeXt document.  "
},
{
  "id": "listing-docinfo",
  "level": "2",
  "url": "sec-pretext.html#listing-docinfo",
  "type": "Listing",
  "number": "4.2.3",
  "title": "",
  "body": "  <docinfo> <macros> \\newcommand{\\deriv}[2]{\\displaystyle \\frac{d#1}{d#2}} \\newcommand{\\real}{\\Bbb R} <\/macros> <prefigure-preamble xmlns=\"https:\/\/prefigure.org\"> <graph stroke=\"green\"\/> <point style=\"diamond\" size=\"5\" fill=\"blue\" outline=\"yes\"\/> <\/prefigure-preamble> <\/docinfo>   Within a PreTeXt document, publication data is included inside <docinfo> .  "
},
{
  "id": "sec-repeat",
  "level": "1",
  "url": "sec-repeat.html",
  "type": "Section",
  "number": "5.1",
  "title": "The <code class=\"code-inline tex2jax_ignore\"><repeat><\/code> element",
  "body": " The <repeat> element  Some diagrams contain a number of components that are similar and differ only in a few attributes. For example, shows several solutions to a differential equation with different initial values.      Several solutions to a differential equation.   Of course, we could simply include a <plot-de-solution> element for each one, but this could be difficult to maintain if we decide to make some small change. Instead, PreFigure offers a <repeat> element that can streamline this process, as illustrated by the PreFigure source code in .    <diagram width=\"300\" height=\"300\" margins=\"10\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid at=\"grid\"\/> <axes at=\"axes\" xlabel=\"t\" ylabel=\"y\"\/> <slope-field at=\"slope-field\" function=\"f\"\/> <repeat parameter=\"k=-4..4\"> <plot-de-solution at=\"solution\" function=\"f\" t0=\"0\" y0=\"k\" domain=\"[0,4]\" stroke=\"orange\" \/> <point at=\"initial-value\" p=\"(0,k)\" size=\"4\" fill=\"orange\" \/> <\/repeat> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"Solutions to the differential equation dy dt = t - y\"> <annotation ref=\"grid\" text=\"The coordinate grid\"\/> <annotation ref=\"axes\" text=\"The coordinate axes\"\/> <annotation ref=\"slope-field\" text=\"The slope field\"\/> <annotation ref=\"solutions\" text=\"A collection of solution curves\"> <annotation ref=\"solution-k=-4\" text=\"The solution with initial value -4\"\/> <annotation ref=\"solution-k=-3\" text=\"The solution with initial value -3\"\/> <annotation ref=\"solution-k=-2\" text=\"The solution with initial value -2\"\/> <annotation ref=\"solution-k=-1\" text=\"The solution with initial value -1\"\/> <annotation ref=\"solution-k=0\" text=\"The solution with initial value 0\"\/> <annotation ref=\"solution-k=1\" text=\"The solution with initial value 1\"\/> <annotation ref=\"solution-k=2\" text=\"The solution with initial value 2\"\/> <annotation ref=\"solution-k=3\" text=\"The solution with initial value 3\"\/> <annotation ref=\"solution-k=4\" text=\"The solution with initial value 4\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .   Line 7 contains a <repeat> element with the attribute parameter=\"k=-4..4\" . This places the parameter name k into the user namespace with the value of -4 and adds the <plot-de-solution> and <point> elements contained within the <repeat> element. This repeats with the values .  The annotations included in show how the handles within the <repeat> element are generated. If an element inside a repeat element has a handle at=\"handle\" , then the graphical component generated when the parameter is, say, param=value is given the handle at=\"handle-param=value\" . For example, when k=2 , the solution has the handle at=\"solution-k=2\" . There is not yet a repeat feature for annotations.  A second example, given in , shows how labels can be managed within a <repeat> element.      The roots of unity.     <diagram width=\"300\" height=\"300\" margins=\"5\"> <definition> alignments=['ne','ne','ne','nw','nw','sw','se','se'] <\/definition> <definition substitution=\"no\"> labels=['1','\\omega','i','\\omega^3','-1','\\omega^5','-i','\\omega^7'] <\/definition> <definition>f(t)=(cos(pi*t\/4),sin(pi*t\/4))<\/definition> <coordinates bbox=\"[-1.4,-1.4,1.4,1.4]\"> <grid at=\"grid\" \/> <axes at=\"axes\" labels=\"no\" \/> <circle at=\"unit-circle\" center=\"(0,0)\" radius=\"1\" stroke=\"blue\"\/> <repeat parameter=\"k=0..7\"> <point at=\"point\" p=\"f(k)\" alignment=\"alignments[k]\"> <m>${labels[k]}<\/m> <\/point> <\/repeat> <\/coordinates> <annotations> <annotation id=\"figure\" text=\"The eighth roots of unity\"> <annotation id=\"axes\" text=\"The coordinate axes\" \/> <annotation id=\"grid\" text=\"The coordinate grid\" \/> <annotation id=\"unit-circle\" text=\"The unit circle\" circular=\"true\"> <annotation id=\"point-k=0\" text=\"The primitive eighth root of unity to the power zero\" speech=\"one\"\/> <annotation id=\"point-k=1\" text=\"The primitive eighth root of unity\" speech=\"omega\"\/> <annotation id=\"point-k=2\" text=\"The primitive eighth root of unity squared\" speech=\"i\"\/> <annotation id=\"point-k=3\" text=\"The primitive eighth root of unity cubed\" speech=\"omega cubed\"\/> <annotation id=\"point-k=4\" text=\"The primitive eighth root of unity to the fourth\" speech=\"minus one\"\/> <annotation id=\"point-k=5\" text=\"The primitive eighth root of unity to the fifth\" speech=\"omega to the fifth\"\/> <annotation id=\"point-k=6\" text=\"The primitive eighth root of unity to the sixth\" speech=\"minus i\"\/> <annotation id=\"point-k=7\" text=\"The primitive eighth root of unity to the seventh\" speech=\"omega to the seventh\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .   Lines 5 through 7 define a set of labels, one for each of the eight points. Remember that ^ is usually interpreted as the numerical exponentiation operator. Since we wish to preserve this character for the label, we include the attribute substitution=\"no\" to prevent ^ being reinterpreted. Notice that the label is given as ${labels[k]} since anything inside ${...} is evaluated in the user namespace.  We can also nest <repeat> elements as illustrated in and PreFigure source .      A <repeat> nested inside another.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"[-1,-1,5,5]\"> <grid\/> <repeat parameter=\"row=0..4\"> <repeat parameter=\"col=0..4\"> <rectangle at=\"rectangle\" center=\"(col, row)\" dimensions=\"(3\/4,3\/4)\" fill=\"blue\"\/> <\/repeat> <\/repeat> <\/coordinates> <\/diagram>   The PreFigure source for .   A typical handle for one of these rectangles is at=\"rectangle-row=2-col=1\" .  "
},
{
  "id": "diagram-diffeq-repeat",
  "level": "2",
  "url": "sec-repeat.html#diagram-diffeq-repeat",
  "type": "Figure",
  "number": "5.1.1",
  "title": "",
  "body": "    Several solutions to a differential equation.  "
},
{
  "id": "listing-diffeq-repeat",
  "level": "2",
  "url": "sec-repeat.html#listing-diffeq-repeat",
  "type": "Listing",
  "number": "5.1.2",
  "title": "",
  "body": "  <diagram width=\"300\" height=\"300\" margins=\"10\"> <definition>f(t,y) = t-y<\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid at=\"grid\"\/> <axes at=\"axes\" xlabel=\"t\" ylabel=\"y\"\/> <slope-field at=\"slope-field\" function=\"f\"\/> <repeat parameter=\"k=-4..4\"> <plot-de-solution at=\"solution\" function=\"f\" t0=\"0\" y0=\"k\" domain=\"[0,4]\" stroke=\"orange\" \/> <point at=\"initial-value\" p=\"(0,k)\" size=\"4\" fill=\"orange\" \/> <\/repeat> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"Solutions to the differential equation dy dt = t - y\"> <annotation ref=\"grid\" text=\"The coordinate grid\"\/> <annotation ref=\"axes\" text=\"The coordinate axes\"\/> <annotation ref=\"slope-field\" text=\"The slope field\"\/> <annotation ref=\"solutions\" text=\"A collection of solution curves\"> <annotation ref=\"solution-k=-4\" text=\"The solution with initial value -4\"\/> <annotation ref=\"solution-k=-3\" text=\"The solution with initial value -3\"\/> <annotation ref=\"solution-k=-2\" text=\"The solution with initial value -2\"\/> <annotation ref=\"solution-k=-1\" text=\"The solution with initial value -1\"\/> <annotation ref=\"solution-k=0\" text=\"The solution with initial value 0\"\/> <annotation ref=\"solution-k=1\" text=\"The solution with initial value 1\"\/> <annotation ref=\"solution-k=2\" text=\"The solution with initial value 2\"\/> <annotation ref=\"solution-k=3\" text=\"The solution with initial value 3\"\/> <annotation ref=\"solution-k=4\" text=\"The solution with initial value 4\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-unity",
  "level": "2",
  "url": "sec-repeat.html#diagram-unity",
  "type": "Figure",
  "number": "5.1.3",
  "title": "",
  "body": "    The roots of unity.  "
},
{
  "id": "listing-unity",
  "level": "2",
  "url": "sec-repeat.html#listing-unity",
  "type": "Listing",
  "number": "5.1.4",
  "title": "",
  "body": "  <diagram width=\"300\" height=\"300\" margins=\"5\"> <definition> alignments=['ne','ne','ne','nw','nw','sw','se','se'] <\/definition> <definition substitution=\"no\"> labels=['1','\\omega','i','\\omega^3','-1','\\omega^5','-i','\\omega^7'] <\/definition> <definition>f(t)=(cos(pi*t\/4),sin(pi*t\/4))<\/definition> <coordinates bbox=\"[-1.4,-1.4,1.4,1.4]\"> <grid at=\"grid\" \/> <axes at=\"axes\" labels=\"no\" \/> <circle at=\"unit-circle\" center=\"(0,0)\" radius=\"1\" stroke=\"blue\"\/> <repeat parameter=\"k=0..7\"> <point at=\"point\" p=\"f(k)\" alignment=\"alignments[k]\"> <m>${labels[k]}<\/m> <\/point> <\/repeat> <\/coordinates> <annotations> <annotation id=\"figure\" text=\"The eighth roots of unity\"> <annotation id=\"axes\" text=\"The coordinate axes\" \/> <annotation id=\"grid\" text=\"The coordinate grid\" \/> <annotation id=\"unit-circle\" text=\"The unit circle\" circular=\"true\"> <annotation id=\"point-k=0\" text=\"The primitive eighth root of unity to the power zero\" speech=\"one\"\/> <annotation id=\"point-k=1\" text=\"The primitive eighth root of unity\" speech=\"omega\"\/> <annotation id=\"point-k=2\" text=\"The primitive eighth root of unity squared\" speech=\"i\"\/> <annotation id=\"point-k=3\" text=\"The primitive eighth root of unity cubed\" speech=\"omega cubed\"\/> <annotation id=\"point-k=4\" text=\"The primitive eighth root of unity to the fourth\" speech=\"minus one\"\/> <annotation id=\"point-k=5\" text=\"The primitive eighth root of unity to the fifth\" speech=\"omega to the fifth\"\/> <annotation id=\"point-k=6\" text=\"The primitive eighth root of unity to the sixth\" speech=\"minus i\"\/> <annotation id=\"point-k=7\" text=\"The primitive eighth root of unity to the seventh\" speech=\"omega to the seventh\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-nested-repeat",
  "level": "2",
  "url": "sec-repeat.html#diagram-nested-repeat",
  "type": "Figure",
  "number": "5.1.5",
  "title": "",
  "body": "    A <repeat> nested inside another.  "
},
{
  "id": "listing-nested-repeat",
  "level": "2",
  "url": "sec-repeat.html#listing-nested-repeat",
  "type": "Listing",
  "number": "5.1.6",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"[-1,-1,5,5]\"> <grid\/> <repeat parameter=\"row=0..4\"> <repeat parameter=\"col=0..4\"> <rectangle at=\"rectangle\" center=\"(col, row)\" dimensions=\"(3\/4,3\/4)\" fill=\"blue\"\/> <\/repeat> <\/repeat> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-arrows",
  "level": "1",
  "url": "sec-arrows.html",
  "type": "Section",
  "number": "5.2",
  "title": "Arrows",
  "body": " Arrows  Arrows can appear in many different contexts within a PreFigure diagram. For instance, a <vector> will be drawn with an arrowhead, usually at its tip, as seen in . Most graphical components that define a path, such as a <polygon> and <parametric-curve> , can be decorated with arrows.      Arrows that decorate vectors.   In constrast, a <slope-field> may have many arrows, one on the end of each line segment, as shown in .      Adapted from Tom Judson's Ordinary Differential Equations Project .   As a result, it is possible to adjust the relative size and shape of arrowheads. Before describing the possibilities, however, it is important to recognize that the size of arrowheads is scaled by the thickness attribute so, for instance, the arrowhead on a line whose thickness=3 will be three times the size as one on a line whose thickness=1 .   shows a variety of choices for defining the appearance of arrowheads. Notice that there are two attributes, arrow-width and arrow-angles , that can be specified and that are described more fully below.      A collection of arrows demonstrating various options.     <diagram dimensions=\"(400,400)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes labels=\"no\"\/> <!-- left side arrows --> <line endpoints=\"((1,9),(4,9))\" arrows=\"2\"\/> <line endpoints=\"((1,8),(4,8))\" arrows=\"2\" arrow-width=\"5\"\/> <line endpoints=\"((1,7),(4,7))\" arrows=\"2\" arrow-width=\"6\"\/> <line endpoints=\"((1,6),(4,6))\" arrows=\"2\" arrow-width=\"7\"\/> <line endpoints=\"((1,5),(4,5))\" arrows=\"2\" arrow-width=\"8\"\/> <line endpoints=\"((1,4),(4,4))\" arrows=\"2\" arrow-width=\"9\"\/> <!-- right side arrows --> <line endpoints=\"((6,9),(9,9))\" arrows=\"2\" arrow-width=\"5\" arrow-angles=\"(35,60)\"\/> <line endpoints=\"((6,8),(9,8))\" arrows=\"2\" arrow-width=\"5\" arrow-angles=\"(40,60)\"\/> <line endpoints=\"((6,7),(9,7))\" arrows=\"2\" arrow-width=\"6\" arrow-angles=\"(45,60)\"\/> <line endpoints=\"((6,6),(9,6))\" arrows=\"2\" arrow-width=\"7\" arrow-angles=\"(35,80)\"\/> <line endpoints=\"((6,5),(9,5))\" arrows=\"2\" arrow-width=\"8\" arrow-angles=\"(40,80)\"\/> <line endpoints=\"((6,4),(9,4))\" stroke=\"red\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(40,80)\"\/> <!-- longer line at the bottom --> <line endpoints=\"((1,3),(9,3))\" arrows=\"2\" additional-arrows=\"(0.7,0.5)\" arrow-width=\"9\" arrow-angles=\"(60,90)\"\/> <line endpoints=\"((1,2),(9,2))\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(30,80)\"\/> <line endpoints=\"((1,1),(9,1))\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(10,90)\" additional-arrows=\"0.5\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .   Notice that a <line> has an additional-arrows attribute that allows one to include arrowheads at various locations along the line. The locations are given as a number between 0 and 1 specifying the relative distance along the line segment.  The shape of an arrowhead and how it is attached to the end of a path is shown in . Once again, the size of the arrowhead is scaled by the thickness of the path. (This style of arrowhead is adapted from Bill Casselman's PiScript package.)      The shape of an arrowhead and its attachment to the path.   shows the meaning of the angle-width and angle-angles attributes. The angle-width , whose value is in SVG coordinates and whose default is 4, controls how far from the path the arrowhead extends. The angle-angles attribute is a pair of angles , given in degrees. The default values are .      The definitions of arrow-width=w and arrow-angles=(A,B) .   Defining these attributes in a publication file allows them to be applied to all the diagrams in a project.  As we will see later, these attributes are ignored when placing arrowheads in a tactile diagram since the shape of the arrowheads is a convention within the braille community.  "
},
{
  "id": "diagram-arrows-vector",
  "level": "2",
  "url": "sec-arrows.html#diagram-arrows-vector",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": "    Arrows that decorate vectors.  "
},
{
  "id": "diagram-arrows-slope",
  "level": "2",
  "url": "sec-arrows.html#diagram-arrows-slope",
  "type": "Figure",
  "number": "5.2.2",
  "title": "",
  "body": "    Adapted from Tom Judson's Ordinary Differential Equations Project .  "
},
{
  "id": "diagram-arrow-properties",
  "level": "2",
  "url": "sec-arrows.html#diagram-arrow-properties",
  "type": "Figure",
  "number": "5.2.3",
  "title": "",
  "body": "    A collection of arrows demonstrating various options.  "
},
{
  "id": "listing-arrow-properties",
  "level": "2",
  "url": "sec-arrows.html#listing-arrow-properties",
  "type": "Listing",
  "number": "5.2.4",
  "title": "",
  "body": "  <diagram dimensions=\"(400,400)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <grid-axes labels=\"no\"\/> <!-- left side arrows --> <line endpoints=\"((1,9),(4,9))\" arrows=\"2\"\/> <line endpoints=\"((1,8),(4,8))\" arrows=\"2\" arrow-width=\"5\"\/> <line endpoints=\"((1,7),(4,7))\" arrows=\"2\" arrow-width=\"6\"\/> <line endpoints=\"((1,6),(4,6))\" arrows=\"2\" arrow-width=\"7\"\/> <line endpoints=\"((1,5),(4,5))\" arrows=\"2\" arrow-width=\"8\"\/> <line endpoints=\"((1,4),(4,4))\" arrows=\"2\" arrow-width=\"9\"\/> <!-- right side arrows --> <line endpoints=\"((6,9),(9,9))\" arrows=\"2\" arrow-width=\"5\" arrow-angles=\"(35,60)\"\/> <line endpoints=\"((6,8),(9,8))\" arrows=\"2\" arrow-width=\"5\" arrow-angles=\"(40,60)\"\/> <line endpoints=\"((6,7),(9,7))\" arrows=\"2\" arrow-width=\"6\" arrow-angles=\"(45,60)\"\/> <line endpoints=\"((6,6),(9,6))\" arrows=\"2\" arrow-width=\"7\" arrow-angles=\"(35,80)\"\/> <line endpoints=\"((6,5),(9,5))\" arrows=\"2\" arrow-width=\"8\" arrow-angles=\"(40,80)\"\/> <line endpoints=\"((6,4),(9,4))\" stroke=\"red\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(40,80)\"\/> <!-- longer line at the bottom --> <line endpoints=\"((1,3),(9,3))\" arrows=\"2\" additional-arrows=\"(0.7,0.5)\" arrow-width=\"9\" arrow-angles=\"(60,90)\"\/> <line endpoints=\"((1,2),(9,2))\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(30,80)\"\/> <line endpoints=\"((1,1),(9,1))\" arrows=\"2\" arrow-width=\"9\" arrow-angles=\"(10,90)\" additional-arrows=\"0.5\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-arrow-defs",
  "level": "2",
  "url": "sec-arrows.html#diagram-arrow-defs",
  "type": "Figure",
  "number": "5.2.5",
  "title": "",
  "body": "    The shape of an arrowhead and its attachment to the path.  "
},
{
  "id": "diagram-arrow-angle-def",
  "level": "2",
  "url": "sec-arrows.html#diagram-arrow-angle-def",
  "type": "Figure",
  "number": "5.2.6",
  "title": "",
  "body": "    The definitions of arrow-width=w and arrow-angles=(A,B) .  "
},
{
  "id": "sec-math",
  "level": "1",
  "url": "sec-math.html",
  "type": "Section",
  "number": "5.3",
  "title": "Mathematical operations",
  "body": " Mathematical operations   As we've seen, PreFigure allows us to define some quantities, often using mathematical operations, and then reuse them. Here we summarize the set of mathematical operations that are possible. PreFigure is written in Python, and authors who are familiar with that language may be able to imagine what is possible.    Math operations  PreFigure provides access to Python's math module, which means that constants such as pi and e are available, as well as functions such as sin , cos , acos , atan , and atan2 . By default, any trigonometric functions use radians, but the functions degrees and radians will convert back and forth.  Some operations from discrete math, such as comb(n,k) for , are also available.  These functions are available without the math. prefix so that we could say, for instance, cos(pi\/6) . See the Python documentation for a full list of functions that are available.    Vector operations  Vector operations may be defined on previously-defined lists or tuples. For instance, if we define u=(1,2) and v=(-2,4) , we can later say u+v and -3*u . (Behind the scenes, any list or tuple that is defined is interpreted as a numpy array.)  Similarly, a matrix may be defined with A = [[1,2],[2,1]] and then used to multiply a vector with A @ v .  Some additional operations include:  length  length(u) finds the length of the vector u .   normalize  normalize(u) gives a vector paralle to u and having unit length.   dot  dot(u, v) finds the dot product of u and v .   midpoint  midpoint(u, v) gives the midpoint of the line segment from u to v .   angle  angle(u) finds the angle, in radians, between the vector and the positive -axis.       List operations  It can be convenient to modify existing lists. For instance, to add an element a to an existing list , we could say append(list, a) . This could be used, for instance, to implement Euler's method, as shown in . Of course, provides an easier way to illustrate Euler's method, but authors will undoubtedly find uses for the append function.      An implementation of Euler's method     <diagram dimensions=\"(300,300)\" margins=\"20\"> <coordinates bbox=\"(-1,-1,10,8)\"> <definition>f(t,y) = 0.1*y*(6-y)<\/definition> <definition>N=5<\/definition> <definition>h=10\/N<\/definition> <definition>points = [[0,1]]<\/definition> <repeat parameter=\"k=1..N\"> <definition>t=points[-1][0]<\/definition> <definition>y=points[-1][1]<\/definition> <definition>points=append(points, [t+h, y+h*f(t,y)])<\/definition> <\/repeat> <grid-axes xlabel=\"t\" ylabel=\"y\"\/> <slope-field function=\"f\" stroke=\"orange\"\/> <polygon points=\"points\" stroke=\"blue\"\/> <repeat parameter=\"k=0..N\"> <point p=\"points[k]\"\/> <\/repeat> <\/coordinates> <\/diagram>   The PreFigure source for .   If list=(a,b,c) , then roll(list) will be the list (b,c,a) . This can be useful for visiting each of the vertices in a polygon, for instance, as shown in .      Adding angle markers to a polygon     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <definition>points = ((1,1),(2,6),(6,9),(9,5),(7,2))<\/definition> <grid-axes decorations=\"no\"\/> <repeat parameter=\"k=1..5\"> <angle-marker points=\"points\"\/> <definition>points=roll(points)<\/definition> <\/repeat> <polygon points=\"points\" closed=\"yes\" stroke=\"blue\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .    "
},
{
  "id": "diagram-euler",
  "level": "2",
  "url": "sec-math.html#diagram-euler",
  "type": "Figure",
  "number": "5.3.1",
  "title": "",
  "body": "    An implementation of Euler's method  "
},
{
  "id": "listing-euler",
  "level": "2",
  "url": "sec-math.html#listing-euler",
  "type": "Listing",
  "number": "5.3.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"20\"> <coordinates bbox=\"(-1,-1,10,8)\"> <definition>f(t,y) = 0.1*y*(6-y)<\/definition> <definition>N=5<\/definition> <definition>h=10\/N<\/definition> <definition>points = [[0,1]]<\/definition> <repeat parameter=\"k=1..N\"> <definition>t=points[-1][0]<\/definition> <definition>y=points[-1][1]<\/definition> <definition>points=append(points, [t+h, y+h*f(t,y)])<\/definition> <\/repeat> <grid-axes xlabel=\"t\" ylabel=\"y\"\/> <slope-field function=\"f\" stroke=\"orange\"\/> <polygon points=\"points\" stroke=\"blue\"\/> <repeat parameter=\"k=0..N\"> <point p=\"points[k]\"\/> <\/repeat> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-roll",
  "level": "2",
  "url": "sec-math.html#diagram-roll",
  "type": "Figure",
  "number": "5.3.3",
  "title": "",
  "body": "    Adding angle markers to a polygon  "
},
{
  "id": "listing-roll",
  "level": "2",
  "url": "sec-math.html#listing-roll",
  "type": "Listing",
  "number": "5.3.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(0,0,10,10)\"> <definition>points = ((1,1),(2,6),(6,9),(9,5),(7,2))<\/definition> <grid-axes decorations=\"no\"\/> <repeat parameter=\"k=1..5\"> <angle-marker points=\"points\"\/> <definition>points=roll(points)<\/definition> <\/repeat> <polygon points=\"points\" closed=\"yes\" stroke=\"blue\"\/> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-annotations",
  "level": "1",
  "url": "sec-annotations.html",
  "type": "Section",
  "number": "6.1",
  "title": "Annotating a diagram",
  "body": " Annotating a diagram   As we saw in , authors can include annotations within their PreFigure source that describe how a reader will explore the diagram using the diagcess library.    The diagcess library  Since annotations will be read by the diagcess library, let's take a moment to consider how a reader will interact with the annotations in a diagram. As we will see momentarily, the annotations will essentially form what mathematicians call a tree. That is, there is a top-level description of the entire diagram with the ability to explore various components in greater detail. Readers will navigate this tree using the arrow keys. The Down arrow requests more details on the component currently being explored while the Right arrow asks for the next detail of the current component. When an arrow key is pressed, a beep called an earcon notifies the reader that there are no more details available at that level.  The two most common key presses are O , which will sonify an element if the author has enabled this feature, and X , which toggles expert mode, about which more will be said later.  When designing annotations, an author is well served by considering their audience. For instance, many blind readers are fairly experienced navigating an HTML page with a screenreader. The diagcess library provides screenreading capabilities for included PreFigure diagrams. As an author, how will you verbally describe the diagram succinctly and completely? How will you organize the components of a diagram into groups that contribute to communicating the diagram's intended meaning? How will you explain the structure of such a group?  In addition, low-vision readers may not be able to interpret the meaning of a diagram in the same way that a sighted reader might. However, the diagcess library highlights the component currently being explored by zooming in on it and outlining it in yellow so that other elements move into the background. In this way, many low-vision readers can perceive the individual components of a diagram and how they fit together into a whole.  Even for sighted readers, annotations can provide more details about a diagram and call attention to specific components of the diagram so that their meaning is not overlooked. Considering the needs of these different audiences can be a challenge but will inevitably lead to more effective diagrams.  While annotations are included in the same PreFigure source, their authoring is typically a separate process from creating the graphical content. One reason for this is that graphical components lie on top of one another in the order in which they are added to the diagram. For example, we usually want a point to lie on top of a line passing through that point so we will include the line and then the point when creating the graphical components. However, when annotating the diagram, we may wish to call attention to the point first and then the line later. Keeping the annotations separate from the graphical content gives us more flexibilty in annotating a diagram.  Perhaps more importantly, however, experience shows that annotating a diagram really should feel like a separate process. When creating the graphical content, we may, for instance, add a line in a particular orientation so that it doesn't overlap with another part of the diagram and stroke it with a particular color to create constrast with other elements. When creating the annotations, we are thinking about the mathematical meaning of that line, why we have included it at all, and how it is related to the other elements in the diagram. These are two different sets of questions, and authors are well served by addressing them separately.    The annotation tree  To begin describing the annotation tree, let's return to the example we considered in , which is shown again, with annotations, in .      A calculus diagram     <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x)=exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph at=\"function\" function=\"f\"\/> <tangent-line at=\"tangent\" function=\"f\" point=\"a\"\/> <group at=\"point\"> <point p=\"(a, f(a))\"\/> <label anchor=\"(a,f(a))\" alignment=\"ne\"> <m>(a,f(a))<\/m> <\/label> <\/group> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"The graph of a function and its tangent line at the point a equals 1\"> <annotation ref=\"graph-tangent\" text=\"The graph and its tangent line\"> <annotation ref=\"function\" text=\"The graph of the function f\" sonify=\"yes\"\/> <annotation ref=\"point\" text=\"The point a comma f of a\"\/> <annotation ref=\"tangent\" text=\"The tangent line to the graph of f at the point\" sonify=\"yes\" speech=\"This line is y equals f of a plus the derivative at a times the quantity x minus a\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .   This example illustrates some important points.   All the annotations are under a single <annotations> element, and each nested <annotation> element corresponds to a node in the annotations tree.    There is a single top-level <annotation> element, which has the attribute ref=\"figure\" . In general, the ref attribute should point to a handle in the tree of graphical components. The handle \"figure\" is implicit in the top-level <diagram> element. The text attribute gives a piece of text that will be displayed and vocalized when the focus goes to the diagram. You may view this as alt-text for the entire diagram so it should be a concise, yet thorough, description of the diagram.   The <grid-axes> element does not have a handle or an associated annotation node, but a set of annotations for it will be automatically added to the annnotations tree, if such a tree is included in the PreFigure source. There is a node for the <grid-axes> and then two child nodes, one for the grid and one for the axes.  The second node that is on the same level as the <grid-axes> annotation has ref=\"graph-tangent . In this case, there is no graphical component with this handle, which shows that the ref attribute need not point to a specific graphical component. This annotation node, however, has children, each with a ref value that points to a graphical component. Therefore, when the focus goes to the node with ref=\"graph-tangent\" , all the components referenced by a child will be highlighted.  When we descend from the node with ref=\"graph-tangent\" , there are three children that point to the graph, the point, and the tangent line. Notice that the node with attribute ref=\"point\" refers to a <group> that includes both the point and the label. When the focus goes to this node, both of those components will be highlighted. While this example illustrates the general behavior of a <group> referenced by an annotation, the same effect is produced by including a label inside the point as demonstrated in .  The graph is sonified with sonify=\"yes\" . When the focus goes to this node and the reader presses O , an aural rendering of the graph will be played.  The node that points to the tangent line has a speech attribute, which has more details about the line. When the reader presses X , then the value of this attribute replaces the value of the text attribute and is displayed and vocalized.  While it is not included in this example, an <annotation> element can have the attribute circular=\"yes\" . When exploring the children of such a node, the focus will return to the first child after we have explored the last child.    Authors should note that everything that is visible is annotated and will, at some point, be highlighted. This is a good practice that should generally be adopted. Suppose, for instance, that the <graph-axes> element is not annotated. A low-vision reader may percevie the presence of these components without being provided an explanation of their purpose.  Also notice how the tree-like structure of the annotations allows a reader to delve into different features with increasing detail. This allows the reader to skip over a branch of the tree, if desired, and go on to features that are of greater interest.    Annotations within repeat elements  We said earlier that the process of creating annotations should generally be separate from the process of illustrating. One exception to this is within a <repeat> element.  Suppose we have a <repeat> element with parameter=\"k=5..7\" and inside this element is a <point> with handle at=\"point\" . This will produce three points for each iteration of the <repeat> element, and these points will be given handles at=\"point-k=5 , at=\"point-k=6 , and at=\"point-k=7 . In this way, one could annotate these three points.  More complicated uses of the <repeat> element, however, can make annotations tedious and difficult to maintain. For this reason, annotations can be added to graphical components and referenced from the annotation tree. This can ease the process of annotating components inside a <repeat> , as seen in .      Annotating a diagram with a <repeat> element.     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,5,5)\"> <definition>ordinals=['first', 'second', 'third', 'fourth', 'fifth']<\/definition> <grid at=\"grid\"\/> <repeat at=\"array\" parameter=\"col=0..4\" annotate=\"yes\" text=\"The array of squares\"> <repeat at=\"column\" parameter=\"row=0..4-col\" annotate=\"yes\" circular=\"yes\" text=\"A column of ${5-col} squares\"> <rectangle at=\"square\" center=\"(col, row)\" dimensions=\"(0.5,0.5)\" stroke=\"black\" fill=\"green\" annotate=\"yes\" text=\"The ${ordinals[row]} square in the ${ordinals[col]} column\"\/> <\/repeat> <\/repeat> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"A triangular array of squares\"> <annotation ref=\"grid\" text=\"A rectangular grid\"\/> <annotation ref=\"array\"\/> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .   This leads to relatively simple and easy to maintain source if, say, we want to add or remove a column of squares. Here is how this works:  Notice that some elements are supplied with an attribute annotate=\"yes\" . When the graphical component is created, an <annotation> is created that can be referenced using its handle. The annotation attributes, such as text and circular , included in the graphical component are passed on to the resulting <annotation> .  In this case, the two <repeat> elements are both given this attrbute along with the child <rectangle> element. Behind the scenes, the <repeat> element creates a <group> with the resulting components added. Annotating the <repeat> element is therefore the same as annotating a <group> as we saw above.  Notice how the text attributes can respond to the different values of the parameters by including pieces of text inside ${...} , which are then evaluted in the current namespace.  The resulting annotations naturally inherit the tree-like structure from the graphical components that define them. We can therefore reference this entire sub-tree by simply referring to the handle ref=\"array\" of the top-level node.  This example illustrates the use of the circular attribute. Once we have examined all the squares in a column, we return to the first one and begin anew.    While any graphical component can be annotated in this way, this feature is included primarily as a way to ease the annotation of diagrams created with a <repeat> element. As mentioned earlier, we encourage authors to separate the processes of illustrating and annotating.   "
},
{
  "id": "diagram-tangent-3",
  "level": "2",
  "url": "sec-annotations.html#diagram-tangent-3",
  "type": "Figure",
  "number": "6.1.1",
  "title": "",
  "body": "    A calculus diagram  "
},
{
  "id": "listing-tangent-3",
  "level": "2",
  "url": "sec-annotations.html#listing-tangent-3",
  "type": "Listing",
  "number": "6.1.2",
  "title": "",
  "body": "  <diagram dimensions=\"(300, 300)\" margins=\"5\"> <definition> a=1 <\/definition> <definition> f(x)=exp(x\/3)*cos(x) <\/definition> <coordinates bbox=\"[-4,-4,4,4]\"> <grid-axes xlabel=\"x\" ylabel=\"y\"\/> <graph at=\"function\" function=\"f\"\/> <tangent-line at=\"tangent\" function=\"f\" point=\"a\"\/> <group at=\"point\"> <point p=\"(a, f(a))\"\/> <label anchor=\"(a,f(a))\" alignment=\"ne\"> <m>(a,f(a))<\/m> <\/label> <\/group> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"The graph of a function and its tangent line at the point a equals 1\"> <annotation ref=\"graph-tangent\" text=\"The graph and its tangent line\"> <annotation ref=\"function\" text=\"The graph of the function f\" sonify=\"yes\"\/> <annotation ref=\"point\" text=\"The point a comma f of a\"\/> <annotation ref=\"tangent\" text=\"The tangent line to the graph of f at the point\" sonify=\"yes\" speech=\"This line is y equals f of a plus the derivative at a times the quantity x minus a\"\/> <\/annotation> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-repeat-annotate",
  "level": "2",
  "url": "sec-annotations.html#diagram-repeat-annotate",
  "type": "Figure",
  "number": "6.1.3",
  "title": "",
  "body": "    Annotating a diagram with a <repeat> element.  "
},
{
  "id": "listing-repeat-annotate",
  "level": "2",
  "url": "sec-annotations.html#listing-repeat-annotate",
  "type": "Listing",
  "number": "6.1.4",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,5,5)\"> <definition>ordinals=['first', 'second', 'third', 'fourth', 'fifth']<\/definition> <grid at=\"grid\"\/> <repeat at=\"array\" parameter=\"col=0..4\" annotate=\"yes\" text=\"The array of squares\"> <repeat at=\"column\" parameter=\"row=0..4-col\" annotate=\"yes\" circular=\"yes\" text=\"A column of ${5-col} squares\"> <rectangle at=\"square\" center=\"(col, row)\" dimensions=\"(0.5,0.5)\" stroke=\"black\" fill=\"green\" annotate=\"yes\" text=\"The ${ordinals[row]} square in the ${ordinals[col]} column\"\/> <\/repeat> <\/repeat> <\/coordinates> <annotations> <annotation ref=\"figure\" text=\"A triangular array of squares\"> <annotation ref=\"grid\" text=\"A rectangular grid\"\/> <annotation ref=\"array\"\/> <\/annotation> <\/annotations> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "sec-tactile",
  "level": "1",
  "url": "sec-tactile.html",
  "type": "Section",
  "number": "6.2",
  "title": "Tactile diagrams",
  "body": " Tactile diagrams   The original motivation for PreFigure arose from the difficulties in creating tactile diagrams from other source, such as TikZ.  Tactile diagrams, at least the kind that PreTeXt and PreFigure authors will want to create, are a relatively new medium, and, as such, there are still some conventions that are not yet firmly established. Ongoing research with blind and low-vision readers is determining best practices for the creation of tactile diagrams, and PreFigure will always implement these practices without demand on an author's attention.  It cannot be stated strongly enough that attention to tactile diagrams will lead to the design of better diagrams for sighted readers. Authors are strongly encouraged to create and explore tactile versions of their PreFigure diagrams and strive for a clean design. There really is no excuse not to: it's as easy as adding -f tactile to the PreFigure bulid command.    Anatomy of a tactile diagram  Before we examine a tactile diagram, we should first consider the medium used to produce them.  While tactile diagrams may be rendered in a variety of ways, PreFigure diagrams will be produced by an embosser on 11\" 11.5\" paper. More specifically, the tactile diagrams created by PreFigure are optimized to be embossed on a ViewPlus embosser.  A tactile diagram produced by PreFigure is meant to use as much of the page as possible. In particular, the diagram will most likely be scaled from the dimensions provided in the <diagram> element in such a way as to preserve the aspect ratio of the dimensions .   You may think of an embosser as a very low-resolution printer, 20 dots per inch to be precise (compared to 300 dpi for a standard printer). An embossers works by raising the paper at a collection of these dots, each of which has a diameter of 0.057 inches. Dots can, however, be raised to a small number of different heights to simulate shading from white to gray to black.  Text in a tactile diagram will be rendered in braille. Each braille cell is a 3 2 array of dots, and the interline spacing between braille cells is 0.4 inches. This means that a typical page has about 25 40 cells or roughly 1000 cells. While a cell does not exactly correspond to a character of written text (some common words have braille contractions and some cells contain formatting information, such as a transition to italics), this figure speaks to the limitations of what can be conveyed in a tactile format. While authors may initially view this as a restriction, experienced authors will see this as a feature that encourages good design.  Mathematics is rendered in Nemeth braille by MathJax while regular text is converted by liblouis into UEB. It is essential that liblouis be installed if you wish to build tactile diagrams on your local PreFigure installation. A PreFigure codespace takes care of this automatically.  Labels are embedded with the Braille29 font, which is included with PreFigure. Issuing the prefig init command will install this font on Linux or Mac-OS, and this happens automatically when a codespace is created.  The command prefig pdf foo will create a PDF that embosses well on a ViewPlus embosser provided that rsvg-convert is available. Again, this is provided in a codespace. The resolution given to rsvg-convert should always be 72, which is the PreFigure default.    With that said, let's explore a tactile version of the ubiquitous tangent line figure, shown in .      A calculus diagram   There is no need to show the PreFigure source for this diagram since it is the same that we saw earlier in . Again, PreFigure adopts the PreTeXt motto: write once, read anywhere. Here are some things you may notice, however.  Foreground elements, such as the graph, tangent, and point, have a clear, white outline of 1\/8\". This is based on the experience of blind readers' experience with PreFigure diagrams.  Labels sit on top of a clear, white rectangle so that they stand out from other elements. In fact, all labels are drawn last so that they sit on top of everything else.  Labels on axes are aligned with tick marks according to guidelines published by The Braille Authority of North America.  Colors are not informative in a tactile diagram so defaults are chosen to render well on an embosser. Filled regions will be rendered as lightgray and the stroke on, say, graphs will be changed to black.  The point is rendered with a radius of 9 SVG units, which translates into 1\/8\" when embossed. As with the white outline described above, authors should think of this distance as a good rule of thumb.  While this may not be apparent in this figure, labels are carefully positioned so that the braille cells in the resulting PDF will lie on top of the 20 dpi embossing grid. As a result, authors may sometimes notice that labels are not exactly where they expect since they will internally snap onto this grid.    Finally, notice the amount of space taken up by the braille label on the point, which translates into . It is not uncommon for the labels you produce to be surprisingly long when rendered in braille. This should lead authors to aspire to brevity in their use of labels, which is a design principle for better sighted diagrams as well. Reading text and processing graphical information are different cognitive tasks so be economical when using text in your diagrams. Instead, use a diagram's caption and surrounding text to provide additional context.    PreFigure considerations for tactile diagrams  With all of that said, attaining the goal of write once, read anywhere is aspirational, and authors will likely find that producing good tactile diagrams requires a bit of tweaking.  First off, any attribute in a PreFigure element can be overridden in tactile form by prepending tactile- before it. While this applies to any attribute, there are likely two attributes where this is most important.  Since color cannot be used to disambiguate elements from one another, authors should consider stroking some features will a dashed line in a tactile diagram. To do so, set tactile-dash=\"9 9\" in a component to be stroked with a dash in a tactile diagram           An ordinary and tactile diagram from the same PreFigure source. Adapted from Tom Judson's Ordinary Differential Equations Project .   In the source given below, notice how one of the solution curves has both attributes stroke=\"red\" and tactile-dash=\"9 9\" . The stroke attribute will be automaticaly overridden to \"black\" in a tactile diagram. Setting the dash to \"9 9\" produces dashes that alternate 1\/8\" of stroke and 1\/8\" empty.    <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(t,y) = (0.4*y[0] - 0.01*y[0]*y[1],-0.3*y[1] + 0.005*y[0]*y[1])<\/definition> <coordinates bbox=\"[-15,-15,70,100]\"> <grid-axes xlabel=\"t\"\/> <de-solve function=\"f\" t0=\"0\" t1=\"100\" y0=\"(70,50)\" name=\"oscillator\" N=\"200\"\/> <plot-de-solution at=\"lynx\" solution=\"oscillator\" axes=\"(t,y0)\" \/> <plot-de-solution at=\"snowshoe\" tactile-dash=\"9 9\" solution=\"oscillator\" axes=\"(t,y1)\" stroke=\"red\"\/> <legend at=\"legend\" anchor=\"(bbox[2], bbox[3])\" alignment=\"sw\" scale=\"0.8\" opacity=\"0.5\"> <item ref=\"lynx\"><m>F(t)<\/m><\/item> <item ref=\"snowshoe\"><m>H(t)<\/m><\/item> <\/legend> <\/coordinates> <\/diagram>   The PreFigure source for .   The other attribute you may wish to override in tactile form is the offset attribute of labels. PreFigure tries to place labels appropriately so that they don't overlap with other elements, but an author will sometimes need to push a label a bit away from its default location. Setting tactile-offset=\"(4,4)\" will push the label an additional four units horiztonally and vertically before snapping onto the 20 dpi embossing grid.  Finally, as discussed in , since every foreground component in a tactile diagram is outlined, you may need to put components in a <group> and the attribute outline=\"tactile\" , which will first paint all the outlines in the group before painting the components themselves.      Outlining two graphs inside a group with outline=\"tactile\" .     <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,5,5)\"> <definition>f(x) = exp(-x) + 2<\/definition> <definition>g(x) = -exp(-x) + 2<\/definition> <grid-axes\/> <group outline=\"tactile\"> <graph function=\"f\"\/> <graph function=\"g\"\/> <\/group> <\/coordinates> <\/diagram>   The PreFigure source for .    "
},
{
  "id": "diagram-tangent-3-tactile",
  "level": "2",
  "url": "sec-tactile.html#diagram-tangent-3-tactile",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": "    A calculus diagram  "
},
{
  "id": "diagram-judson-system",
  "level": "2",
  "url": "sec-tactile.html#diagram-judson-system",
  "type": "Figure",
  "number": "6.2.2",
  "title": "",
  "body": "         An ordinary and tactile diagram from the same PreFigure source. Adapted from Tom Judson's Ordinary Differential Equations Project .  "
},
{
  "id": "listing-judson-system",
  "level": "2",
  "url": "sec-tactile.html#listing-judson-system",
  "type": "Listing",
  "number": "6.2.3",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <definition>f(t,y) = (0.4*y[0] - 0.01*y[0]*y[1],-0.3*y[1] + 0.005*y[0]*y[1])<\/definition> <coordinates bbox=\"[-15,-15,70,100]\"> <grid-axes xlabel=\"t\"\/> <de-solve function=\"f\" t0=\"0\" t1=\"100\" y0=\"(70,50)\" name=\"oscillator\" N=\"200\"\/> <plot-de-solution at=\"lynx\" solution=\"oscillator\" axes=\"(t,y0)\" \/> <plot-de-solution at=\"snowshoe\" tactile-dash=\"9 9\" solution=\"oscillator\" axes=\"(t,y1)\" stroke=\"red\"\/> <legend at=\"legend\" anchor=\"(bbox[2], bbox[3])\" alignment=\"sw\" scale=\"0.8\" opacity=\"0.5\"> <item ref=\"lynx\"><m>F(t)<\/m><\/item> <item ref=\"snowshoe\"><m>H(t)<\/m><\/item> <\/legend> <\/coordinates> <\/diagram>   The PreFigure source for .  "
},
{
  "id": "diagram-outline-tactile-2",
  "level": "2",
  "url": "sec-tactile.html#diagram-outline-tactile-2",
  "type": "Figure",
  "number": "6.2.4",
  "title": "",
  "body": "    Outlining two graphs inside a group with outline=\"tactile\" .  "
},
{
  "id": "listing-outline-tactile",
  "level": "2",
  "url": "sec-tactile.html#listing-outline-tactile",
  "type": "Listing",
  "number": "6.2.5",
  "title": "",
  "body": "  <diagram dimensions=\"(300,300)\" margins=\"5\"> <coordinates bbox=\"(-1,-1,5,5)\"> <definition>f(x) = exp(-x) + 2<\/definition> <definition>g(x) = -exp(-x) + 2<\/definition> <grid-axes\/> <group outline=\"tactile\"> <graph function=\"f\"\/> <graph function=\"g\"\/> <\/group> <\/coordinates> <\/diagram>   The PreFigure source for .  "
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
