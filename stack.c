struct stack {
	void *head;
	struct stack *rest;
};
typedef struct stack stack;

unsigned int stack_length(stack *s) {
	stack *tail = s;
	unsigned int length = 0;
	
	while(tail != NULL) {
		length++;
		tail = tail->rest;
	}
	return length;
}

bool stack_isEmpty(stack *s) {
	return s == NULL;
}

stack *stack_pop_untidy(stack *s) {
	if(s == NULL) {
		//TODO Error
		return NULL;
	} else {
		return s->rest;
	}
}

stack *stack_pop(stack *s) {
	stack *t;
	if(s == NULL) {
		//TODO Error
		return NULL;
	} else {
		free(s->head);
		t = s->rest;
		free(s);
		return t;
	}	
}

void *stack_peek(stack *s) {
	if(s == NULL) {
		//TODO Errorr
		return NULL;
	} else {
		return s->head;
	}
}

stack *stack_push(void *val, stack *s) {
	stack *t = malloc(sizeof(stack));
	
	if(t == NULL) {
		//TODO Error
		return NULL;
	} else {
		t->head = val;
		t->rest = s;
		return t;
	}
}

void stack_free(stack *s) {
	stack *tmp;
	while(s != NULL) {
		free(s->head);
		tmp = s->rest;
		free(s);
		s = tmp;
	}
}

stack *stack_malloc(void **array, unsigned int len) {
	unsigned int idx;
	void *item, **tail;
	stack *s, *t = NULL;
	
	if(array == NULL) {
		//TODO Error
	} else {
		tail = array;
		for(idx = 0; idx < len; idx++) {
			s = malloc(sizeof(stack));
			s->head = item = *tail;
			s->rest = t;
			tail++;
			t = s;
		}
	}
	return s;
}