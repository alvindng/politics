
$(function(){
  // $('form').submit(function(event) {});
  $('form').submit(function(event) {
    event.preventDefault();

    var guns = parseInt($('#gun-control').val());
    var war = parseInt($('#war').val());
    var drugs = parseInt($('#drug-control').val());
    var result = guns + war + drugs;

    if (result >= -6 && result <= -3){
      $('#result-dive').html('<h1>Anarchist</h1><br><p>Organic photo booth PBR&B semiotics chartreuse polaroid +1, tattooed irony tumblr echo park. Microdosing kickstarter ramps flannel schlitz pabst. Godard farm-to-table kale chips, craft beer tote bag cornhole fashion axe listicle irony dreamcatcher. Beard put a bird on it chillwave, wolf deep v banjo bicycle rights art party cornhole selfies intelligentsia green juice pug vinyl. Tilde lumbersexual blog farm-to-table hoodie banh mi, whatever meh artisan cold-pressed paleo tousled lo-fi. IPhone literally post-ironic williamsburg echo park, direct trade narwhal. Humblebrag distillery viral iPhone, meditation sriracha fixie leggings kale chips meh venmo skateboard 3 wolf moon bespoke.</p>');
    }
    else if (result > -3 && result <0){
      $('#result-dive').html('<h1>Libertarion</h1><br><p>Organic photo booth PBR&B semiotics chartreuse polaroid +1, tattooed irony tumblr echo park. Microdosing kickstarter ramps flannel schlitz pabst. Godard farm-to-table kale chips, craft beer tote bag cornhole fashion axe listicle irony dreamcatcher. Beard put a bird on it chillwave, wolf deep v banjo bicycle rights art party cornhole selfies intelligentsia green juice pug vinyl. Tilde lumbersexual blog farm-to-table hoodie banh mi, whatever meh artisan cold-pressed paleo tousled lo-fi. IPhone literally post-ironic williamsburg echo park, direct trade narwhal. Humblebrag distillery viral iPhone, meditation sriracha fixie leggings kale chips meh venmo skateboard 3 wolf moon bespoke.</p>');
    }
    else if (result === 0){
      $('#result-dive').html('<h1>Neutral</h1><br><p>Organic photo booth PBR&B semiotics chartreuse polaroid +1, tattooed irony tumblr echo park. Microdosing kickstarter ramps flannel schlitz pabst. Godard farm-to-table kale chips, craft beer tote bag cornhole fashion axe listicle irony dreamcatcher. Beard put a bird on it chillwave, wolf deep v banjo bicycle rights art party cornhole selfies intelligentsia green juice pug vinyl. Tilde lumbersexual blog farm-to-table hoodie banh mi, whatever meh artisan cold-pressed paleo tousled lo-fi. IPhone literally post-ironic williamsburg echo park, direct trade narwhal. Humblebrag distillery viral iPhone, meditation sriracha fixie leggings kale chips meh venmo skateboard 3 wolf moon bespoke.</p>');
    }
    else if (result > 0 && result <= 3){
      $('#result-dive').html('<h1>Conservative</h1><br><p>Organic photo booth PBR&B semiotics chartreuse polaroid +1, tattooed irony tumblr echo park. Microdosing kickstarter ramps flannel schlitz pabst. Godard farm-to-table kale chips, craft beer tote bag cornhole fashion axe listicle irony dreamcatcher. Beard put a bird on it chillwave, wolf deep v banjo bicycle rights art party cornhole selfies intelligentsia green juice pug vinyl. Tilde lumbersexual blog farm-to-table hoodie banh mi, whatever meh artisan cold-pressed paleo tousled lo-fi. IPhone literally post-ironic williamsburg echo park, direct trade narwhal. Humblebrag distillery viral iPhone, meditation sriracha fixie leggings kale chips meh venmo skateboard 3 wolf moon bespoke.</p>');
    }
    else if (result > 3 && result <= 6){
      $('#result-dive').html('<h1>Mild Socialist</h1><br><p>Organic photo booth PBR&B semiotics chartreuse polaroid +1, tattooed irony tumblr echo park. Microdosing kickstarter ramps flannel schlitz pabst. Godard farm-to-table kale chips, craft beer tote bag cornhole fashion axe listicle irony dreamcatcher. Beard put a bird on it chillwave, wolf deep v banjo bicycle rights art party cornhole selfies intelligentsia green juice pug vinyl. Tilde lumbersexual blog farm-to-table hoodie banh mi, whatever meh artisan cold-pressed paleo tousled lo-fi. IPhone literally post-ironic williamsburg echo park, direct trade narwhal. Humblebrag distillery viral iPhone, meditation sriracha fixie leggings kale chips meh venmo skateboard 3 wolf moon bespoke.</p>');
    }

    $('a')[0].click();

  });
});
