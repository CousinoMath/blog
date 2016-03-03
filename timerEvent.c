struct periodicEvent {
	unsigned long lastEvent;
	unsigned long period;
};
typedef struct periodicEvent periodicEvent;

periodicEvent *periodicEvent_malloc(unsigned long d) {
	periodicEvent *pe = malloc(sizeof(periodicEvent));
	
	pe->period = d;
	pe->lastEvent = millis();
	return pe;
}

void periodicEvent_free(periodicEvent *pe) {
	free(pe);
}

void periodicEvent_setPeriod(periodicEvent *pe, unsigned long d) {
	if(pe != NULL) {
		pe->period = d;
	}
}

boolean perodicEvent_hasPeriodicElapsed(periodicEvent *pe) {
	unsigned long current = millis();
	boolean hasIt = current > pe->lastEvent + pe->period;
	if(hasIt) {
		pe->lastEvent = current;
	}
	return hasIt;
}

void periodicEvent_setLastEvent(periodicEvent *pe, unsigned long le) {
	if(pe != NULL) {
		pe->lastEvent = le;
	}
}