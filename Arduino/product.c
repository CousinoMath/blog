struct product {
	void *first;
	void *second;
};
typedef struct product product;

void *prod_first(product *p) {
	return p->first;
}

void *prod_second(product *p) {
	return p->second;
}

product *prod_malloc(void *a, void *b) {
	product *p = malloc(sizeof(product));
	
	if(p == NULL) {
		//TODO Error
		return NULL;
	} else {
		p->first = a;
		p->second = b;
		return p;
	}
}

void prod_free(product *p) {
	if(p != NULL) {
		free(p->first);
		free(p->second);
		free(p);
	}
}