/* Move object metadata into switcher tabs */
var extra_metadata = document.getElementsByClassName("extra-metadata");
var how_many_extras = extra_metadata.length; /* count now to prevent infinite loop */
var metadata_containers = document.getElementsByClassName("more-metadata");

/* Move extra meta data into one container */
for (i = 0; i < how_many_extras; i++) {
  metadata_containers[0].appendChild(extra_metadata[i]);
}

/* For for other containers, create a copy and add it */
for (i = 1; i < metadata_containers.length; i++) {
  /* Make a copy of any extra metadata */
  var copied_metadata = new Array();

  /* Move copy into the container */
  for (j = 0; j < how_many_extras; j++) {
    copied_metadata = extra_metadata[j].cloneNode(true);
    metadata_containers[i].appendChild(copied_metadata);
  }
}
