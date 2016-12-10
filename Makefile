######
#
# A simple Makefile
#
######

PATSCC=$(PATSHOME)/bin/patscc
ATSCC2JS=$(PATSHOME)/bin/atscc2js

######
#
all:: \
Battleship_play_dats.js
#
Battleship_play_dats.c: \
Battleship.sats Battleship_play.dats; \
$(PATSCC) -ccats Battleship_play.dats
Battleship_play_dats.js: Battleship_play_dats.c; $(ATSCC2JS) -o $@ -i $<

all:: \
Slides_dats.js
Slides_dats.c: Slides.dats; $(PATSCC) -ccats $<
Slides_dats.js: Slides_dats.c; $(ATSCC2JS) -o $@ -i $<
#
######

RMF=rm -f

######

clean:: ; $(RMF) *~
clean:: ; $(RMF) *_dats.c

######

cleanall:: clean
cleanall:: ; $(RMF) *_dats.js

###### end of [Makefile] ######
