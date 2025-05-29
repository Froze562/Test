// Prevent right-click context menu and keyboard shortcuts
document.addEventListener('DOMContentLoaded', function() {
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable F12 key (Developer Tools)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12') {
            e.preventDefault();
        }
    });
});
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function(e) {
    // Block Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+Shift+I
    if (
      (e.ctrlKey && ['c', 'u', 's'].includes(e.key.toLowerCase())) ||
      (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i')
    ) {
      e.preventDefault();
    }
});
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.body.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelector('main').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelector('footer').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelector('header').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelector('nav').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelector('.sidebar').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelector('.content').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelector('.footer').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelector('.header').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelector('.nav').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelector('.main').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('select').forEach(select => {
    select.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('canvas').forEach(canvas => {
    canvas.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('svg').forEach(svg => {
    svg.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('embed').forEach(embed => {
    embed.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('object').forEach(object => {
    object.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('details').forEach(details => {
    details.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('summary').forEach(summary => {
    summary.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('blockquote').forEach(blockquote => {
    blockquote.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('code').forEach(code => {
    code.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('pre').forEach(pre => {
    pre.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('kbd').forEach(kbd => {
    kbd.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('mark').forEach(mark => {
    mark.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('time').forEach(time => {
    time.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('progress').forEach(progress => {
    progress.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('meter').forEach(meter => {
    meter.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('output').forEach(output => {
    output.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('label').forEach(label => {
    label.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('fieldset').forEach(fieldset => {
    fieldset.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('legend').forEach(legend => {
    legend.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('datalist').forEach(datalist => {
    datalist.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('optgroup').forEach(optgroup => {
    optgroup.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('option').forEach(option => {
    option.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('caption').forEach(caption => {
    caption.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('table').forEach(table => {
    table.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('thead').forEach(thead => {
    thead.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('tbody').forEach(tbody => {
    tbody.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('tfoot').forEach(tfoot => {
    tfoot.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('tr').forEach(tr => {
    tr.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('th').forEach(th => {
    th.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('td').forEach(td => {
    td.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('canvas').forEach(canvas => {
    canvas.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('script').forEach(script => {
    script.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('style').forEach(style => {
    style.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('link').forEach(link => {
    link.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('meta').forEach(meta => {
    meta.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('title').forEach(title => {
    title.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('base').forEach(base => {
    base.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('noscript').forEach(noscript => {
    noscript.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('template').forEach(template => {
    template.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('slot').forEach(slot => {
    slot.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('picture').forEach(picture => {
    picture.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('source').forEach(source => {
    source.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('area').forEach(area => {
    area.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
document.querySelectorAll('map').forEach(map => {
    map.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
});
// Prevent right-click context menu on the entire document //
