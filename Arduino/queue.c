struct queue {
	//Circularly linked list would be better
	void *node;
	queue *left, *right;
};
typedef struct queue queue;

bool queue_isEmpty(queue *q) {
	return q == NULL;
}

unsigned int queue_length(queue *q) {
	unsigned int len = 0;
	queue *r;
	
	if(q != NULL) {
		r = q->right;
		while(r != q) {
			len++;
			r = r->right;
		}
	}
	return len;
}

queue *queue_enqueue(queue *q, void *node) {
	queue *r = malloc(sizeof(queue));
	queue *p;
	
	if(q == NULL) {
		r->node = node;
		r->left = r->right = NULL;
	} else {
		r->node = node;

		q->left = r;
		r->right = q;

		p = q->left;
		p->right = r;
		r->left = p;
		return q;
	}
}

void *queue_peek(queue *q) {
	queue *r;
	void *head;
	if(q == NULL) {
		//TODO Error
		return NULL;
	} else {
		r = q;
		while(r->rest != NULL) {
			r = r->rest;
		}
		return r->tail;
	}
}

queue *queue_dequeue_untidy(queue *q) {
	queue *r;
	if(q == NULL) {
		//TODO Error
		return NULL;
	} else {
		r = q;
		while(r->rest != NULL) {
			
		}
		return r;
	}
}

queue *queue_dequeue(queue *q) {
	queue *r;
	if(q == NULL) {
		//TODO Error
		return NULL;
	} else {
		r = q->rest;
		free(q->tail);
		free(q);
	}
}

queue *queue_malloc(void **array, unsigned int length) {
	queue *q;
	unsigned int idx;
	void *item;
	
	if(array == NULL) {
		//TODO Error
		return NULL;
	} else {
		q = 
	}
}