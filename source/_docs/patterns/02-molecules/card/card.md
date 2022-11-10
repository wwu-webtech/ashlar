---
sidebar_position: 1
---

# Card


    <div {{ attributes }}>
      {% if block_content.field_link.0.url is not empty %}
      <div class="title">
        {{ title_prefix }}
          {% if label %}
            {% if block_content.field_heading_level.0.value is not empty %}
              <{{ block_content.field_heading_level.0.value }} {{ title_attributes }}>
                <a href="{{ block_content.field_link.0.url }}">{{ label }}</a>
              </{{ block_content.field_heading_level.0.value }}>
            {% else %}
              <p {{ title_attributes }}>
                <a href="{{ block_content.field_link.0.url }}">{{ label }}</a>
              </p>
            {% endif %}
          {% endif %}
        {{ title_suffix }}
      </div>
      {% else %}
      <div class="title">
        {% include "@atoms/text/label/label-customized.twig" %}
      </div>
      {% endif %}

      {% if content.field_sorting_term %}
        <div class="sorting-term">
          {{ content.field_sorting_term }}
        </div>
      {% endif %}

      {% if content.field_image %}
      <div class="image">
        {{ content.field_image }}
      </div>
      {% endif %}

      {% if content.field_highlighted_terms %}
        {{ content.field_highlighted_terms }}
      {% endif %}

      {% if content.field_date %}
        <div class="date">
          {{ content.field_date }}
        </div>
      {% endif %}

      {% if content.field_location %}
        <div class="location">
          {{ content.field_location }}
        </div>
      {% endif %}

      <div class="body">
        {% if content %}
          {% block content %}
            {{ content.body }}
          {% endblock %}
        {% endif %}
      </div>
    </div>