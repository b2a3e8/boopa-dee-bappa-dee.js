const index = require('../src/index');

test('simple string looks the same after encoding and decoding', () => {

    var input = "test";
    index.encode(input).then((encoded) => {
        index.decode(encoded).then((decoded) => {
            expect(decoded).toEqual(input);
        });
    });
});

test('complex string looks the same after encoding and decoding', () => {

    var input = "Habitasse suscipit curae; aliquam sodales vulputate primis senectus montes litora hac ad ridiculus. Ad luctus vestibulum placerat molestie sociis nascetur nam senectus interdum proin luctus cras fermentum egestas, placerat pretium quisque eget gravida placerat, ante dictum congue class fermentum pulvinar feugiat lectus bibendum dis fusce. Porta vivamus felis a ante potenti scelerisque. Aliquet ut convallis fringilla eu lacinia arcu pellentesque vivamus, ultricies nam hac maecenas nibh suscipit laoreet. Lobortis interdum velit taciti suscipit maecenas tortor fusce massa diam sit mattis fringilla per hac, nostra curabitur. Leo inceptos fames aliquet hymenaeos elit elit aliquam duis parturient mollis bibendum pellentesque curae;, venenatis purus. Augue tempus. Augue cum nostra et semper purus in odio ad Est. Duis, conubia turpis aliquet consequat tellus inceptos sociosqu nec facilisis ultricies dignissim odio. Faucibus lacus dolor vestibulum interdum id risus pretium dapibus. Habitant morbi egestas. Mus erat lacus conubia tincidunt fusce. Risus euismod montes quam Potenti ligula urna senectus ridiculus fringilla cum proin ultricies Montes taciti augue laoreet integer hymenaeos dapibus aenean tempor, tristique auctor curabitur dictumst fames. Sociis. Sollicitudin sollicitudin eleifend id, senectus sed mollis. Nullam. Luctus morbi fames feugiat imperdiet placerat cubilia magnis et. Mus vivamus dictumst fusce interdum tempor. Penatibus integer vel. Convallis porta placerat. Nulla primis, consectetuer hendrerit habitant nec est. Pellentesque. Sociis blandit pretium viverra maecenas feugiat, senectus hymenaeos rutrum mollis sed vitae ut. Euismod netus nonummy, amet iaculis nascetur feugiat posuere tempus sociosqu enim volutpat. Condimentum ipsum montes urna aliquet egestas at ultricies. Aliquet pretium mus pharetra Tristique platea in interdum. Molestie elit eros felis conubia aenean malesuada justo ligula vulputate tempor. Mus eget dignissim donec condimentum proin. Suscipit at felis enim, lorem mus ridiculus eget ridiculus adipiscing eleifend, accumsan sem vestibulum, ut feugiat ligula in phasellus, nisi, egestas lectus. Amet nec dolor ridiculus proin, ullamcorper imperdiet tempor laoreet congue consectetuer. Aliquam aptent consectetuer ultricies hac duis ullamcorper vitae libero suspendisse ultrices euismod arcu vel malesuada adipiscing, ac ultrices torquent. Proin nisl pretium ac senectus sodales inceptos netus venenatis ac, malesuada malesuada. Ultrices mauris fermentum vulputate nibh quis, nec suscipit Morbi quisque. Suscipit Habitant turpis placerat. Suscipit euismod cubilia fames ac aptent interdum. Pede praesent laoreet laoreet sem. Nullam platea velit. Consectetuer suspendisse velit nam eu. Ipsum ullamcorper euismod maecenas praesent egestas nisi nulla. Erat habitant proin nibh leo nisl. Laoreet maecenas. Rutrum eleifend, viverra feugiat laoreet malesuada, nullam elementum varius donec pretium auctor inceptos ultrices egestas justo phasellus. Sed Ac ante scelerisque mus feugiat sollicitudin lorem lacus id nam, natoque lectus nulla nulla semper inceptos. Cubilia augue bibendum sapien justo sagittis fames eros tempor. Eu laoreet in, egestas lacinia ad velit luctus euismod aenean mi eros. Ridiculus laoreet aliquet primis metus. Proin semper ridiculus fermentum tempor laoreet id adipiscing suspendisse nibh rhoncus, porttitor lobortis augue laoreet velit. Cras donec mattis Potenti nec nascetur facilisi quam congue montes ornare. Ridiculus vehicula. Volutpat dignissim eros congue nullam cum est felis inceptos eget magna dapibus dignissim nibh vel scelerisque elit curabitur euismod. In, dictumst pellentesque. Suspendisse facilisis turpis. Aptent malesuada lobortis risus litora vulputate est a convallis varius molestie tortor laoreet pellentesque auctor elit magna congue fringilla massa dui. Integer condimentum. Habitant vulputate vivamus tempus convallis adipiscing eget ridiculus sollicitudin in. Diam ipsum maecenas imperdiet, vulputate commodo fames Imperdiet inceptos curae; Ultricies velit amet mattis dis nonummy fames. Mollis nullam. Pede commodo tincidunt conubia Potenti. Rhoncus rutrum vehicula. Aliquet nisl luctus scelerisque volutpat lectus curae; posuere fringilla justo class pulvinar sem nec nibh interdum blandit id, maecenas vitae placerat sociosqu. Mus nonummy aliquet nam blandit parturient in congue metus lectus aenean taciti rutrum varius primis pellentesque in. Tellus quam vestibulum Sociosqu vestibulum risus consectetuer. Quam vestibulum scelerisque pulvinar pede risus curabitur iaculis per aenean felis magna, vulputate dignissim Augue ad elementum fusce suspendisse. Sodales, proin venenatis platea fusce dolor netus pretium viverra malesuada Commodo congue. Eu, diam donec dignissim varius interdum turpis posuere tempor Gravida tellus dui pretium mollis tincidunt viverra inceptos at habitasse dui. Molestie egestas mus adipiscing aptent eget semper, nonummy tellus per nunc platea egestas. In torquent urna. Diam nonummy. Venenatis pharetra tempor. Tristique aliquet. Neque maecenas diam viverra. Magnis quam phasellus adipiscing natoque scelerisque integer. Potenti eros venenatis Lorem placerat nullam nibh, enim cubilia malesuada. Montes vitae adipiscing massa In ligula enim consequat diam nec lorem ultricies conubia. Enim quis morbi, nostra. Sed. Eleifend curabitur lorem nisi orci congue sollicitudin potenti sapien At imperdiet inceptos. Augue nascetur diam hendrerit Malesuada imperdiet parturient, nulla eget sodales quis, fermentum mauris eros volutpat suscipit convallis. Consectetuer. A laoreet penatibus nisi, at non natoque viverra cursus velit at ante condimentum dui dis magnis fermentum eu bibendum habitant. Quisque cursus aenean faucibus parturient facilisis porta. Laoreet arcu. Magna bibendum torquent sociosqu sit ridiculus aliquet mauris Dapibus lobortis placerat ipsum imperdiet tincidunt lorem. Lacinia dui commodo. Conubia ornare. Imperdiet faucibus venenatis. Nulla, at orci, id euismod platea molestie cum per cras sollicitudin porttitor et tristique magnis Lectus est. Nascetur. Mauris porttitor, accumsan lacinia malesuada sem Ad, fames mus eros suspendisse habitant quis in Pretium consequat tincidunt per pede libero hac vehicula nibh litora leo. Nec magnis magna sociis turpis, malesuada nunc class ullamcorper a consectetuer neque fames tempus auctor ultrices at diam sodales venenatis proin, vivamus ornare class eget. Malesuada at. Consectetuer aliquet. Fermentum. Congue at. Semper nisi hac sociis At. Auctor conubia tortor gravida magnis ut pharetra, posuere torquent. Tincidunt faucibus senectus fusce. Massa at, felis. Tortor sollicitudin hendrerit luctus Lectus. Orci per interdum odio primis inceptos consequat. Per venenatis lectus nulla congue dignissim. Libero ullamcorper pulvinar convallis suscipit varius curabitur integer augue netus. Leo venenatis cum metus aliquam condimentum ac condimentum aliquet vulputate phasellus sagittis. A dis volutpat ipsum blandit phasellus consectetuer, et fermentum. Non maecenas imperdiet nunc bibendum arcu urna Donec risus vel mollis ante Interdum, curabitur. Nibh, ultricies facilisis facilisi euismod nunc. Metus odio montes, ipsum. Fusce pellentesque, ut lobortis, eget lacinia praesent varius pretium. Habitant arcu nullam. Platea fusce tempor ultricies habitasse. Suspendisse enim Feugiat accumsan habitasse quisque metus quis etiam bibendum aenean mi fusce integer augue molestie vestibulum accumsan.";
    index.encode(input).then((encoded) => {
        index.decode(encoded).then((decoded) => {
            expect(decoded).toEqual(input);
        });
    });
});