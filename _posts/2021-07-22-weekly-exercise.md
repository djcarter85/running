---
layout: post
title: "Weekly Exercise Plan"
---

[In my last post](/2021/05/16/run30/), I said that I would make a decision by the end of the month about what my next exercise target would be. I did indeed make a target but didn't write a blog post about it, so this is me remedying that!

Rather than being solely focussed on running, my new goal is broader and involves multiple types of exercise. I have a desire to improve my fitness, but that's a very vague goal and so I need a numerical target to aim for. So, here's my exercise plan:

- Every week, I will do **3 or 4 dedicated sessions of exercise**. Each of these could be any one of the following:
  - a football match (I'm part of a 6-a-side team which plays most Mondays);
  - a run;
  - an interval session;
  - an indoor workout;
  - something else.
- On every other day in the week I will walk **at least 6,000 steps**.
- Every Sunday I'll make a **plan** of when I'm going to exercise the following week.
- Every four weeks I'll **review** how it's going and potentially make some tweaks.

Why have I made this plan? There are a number of reasons:

- I want to vary the types of exercise that I do, so it doesn't become boring.
- Making sure I do at least 6,000 steps on rest days helps me to do at least a small amount of exercise even when I don't feel like it.
- Reviewing every week means I make sure I have the time to fit in the sessions; e.g. if I'm busy later in the week I'll get the exercise done earlier.
- Reviewing every four weeks means I can change things and make a different plan without it petering out over time. I can bring in "something else" if I want to!

I'm going to document how I'm doing with the chart below. I hope this will give me incentive to see it through!

One particular aim early on is to get back up to doing 5km runs regularly. Parkrun starts up again on 24 June and so it seems reasonable to try and do a 5k every weekend. I won't stick to that religiously but it's a good goal to have in mind.

<table class="table table-striped table-sm table-hover">
  <tr>
    <th>M</th>
    <th>T</th>
    <th>W</th>
    <th>T</th>
    <th>F</th>
    <th>S</th>
    <th>S</th>
  </tr>

  {% for week in site.data.weekly-exercise.weeks %}
    <tr>
      {% for day in week.days %}
        <td>
          <em>
            {{ day.date }}
          </em>
          <br />
          {% case day.exerciseType %}
            {% when "football" %}
              ⚽
            {% when "intervals" %}
              ⏱
            {% when "run" %}
              🏃‍♂️
            {% when "walk" %}
              🚶‍♂️
            {% when "workout" %}
              🏋️‍♂️
          {% endcase %}
          {{ day.comment }}
        </td>
      {% endfor %}
    </tr>
  {% endfor %}
</table>